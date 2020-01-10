import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import firebase from '../../firebase';
import { ModalInput, ModalRadio } from '../../assets/styles/pages/elements';
import { FormModal } from './FormModal';

export const ModalButton = (props) => {
  const { nameTemp, viewsTemp, statusTemp, id, className, modalParent, toggle, title } = props;
  const [name, setName] = useState('');
  const [views, setViews] = useState(0);
  const [status, setStatus] = useState(true);

  useEffect(() => {
    setName(nameTemp);
    setViews(viewsTemp);
    setStatus(statusTemp);
  }, [nameTemp, viewsTemp, statusTemp]);

  const onExec = () => {
    const db = firebase.firestore();

    if (name && views && status !== null) {
      if (id) {
        // Edit
        db.collection('articles')
          .doc(id)
          .set({ name, views: parseInt(views), status });
      } else {
        // Add
        db.collection('articles').add({ name, views: parseInt(views), status });
      }
      toggle();
    }
  };

  const onChooseStatus = (e) => {
    const temp = e.target.value === 'true' ? true : false;
    setStatus(temp);
  };

  return (
    <Modal isOpen={modalParent} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>
        <FormModal name={nameTemp} setName={setName} />
        <ModalInput>
          <input
            type="number"
            name="views"
            defaultValue={viewsTemp}
            autoComplete="off"
            required
            className="form-control"
            onChange={(e) => setViews(e.target.value)}
          />
          <label>Views</label>
        </ModalInput>
        <ModalRadio>
          <label className="modal-label__first">
            <input
              type="radio"
              name="status"
              onChange={onChooseStatus}
              value={true}
              checked={status === true}
            />
            Show
          </label>
          <label>
            <input
              type="radio"
              name="status"
              onChange={onChooseStatus}
              value={false}
              checked={status === false}
            />
            Hide
          </label>
        </ModalRadio>
      </ModalBody>
      <ModalFooter>
        <Button outline color="success" onClick={onExec}>
          Confirm
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
