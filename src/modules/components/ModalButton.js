import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap';
import firebase from '../../firebase';
import { FormModal } from './FormModal';
import { ModalRadio } from '../../assets/styles/pages/elements';

export const ModalButton = (props) => {
  const { nameTemp, viewsTemp, statusTemp, id, className, modalParent, toggle, title } = props;
  const [name, setName] = useState('');
  const [views, setViews] = useState(0);
  const [status, setStatus] = useState(true);
  const [error, setError] = useState(false);

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
        if (parseInt(views) <= 1000000000) {
          db.collection('articles')
            .doc(id)
            .set({ name, views: parseInt(views), status });
          toggle();
        } else {
          setError(true);
        }
      } else {
        // Add
        db.collection('articles').add({ name, views: parseInt(views), status });
        toggle();
      }
      setError(false);
    } else {
      setError(true);
    }
  };

  const onChooseStatus = (e) => {
    const temp = e.target.value === 'true' ? true : false;
    setStatus(temp);
  };

  return (
    <Modal
      isOpen={modalParent}
      toggle={() => {
        toggle();
        setError(false);
      }}
      className={className}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      {error ? <Alert color="danger">Invaid</Alert> : ''}
      <ModalBody>
        <FormModal
          name={nameTemp}
          views={viewsTemp}
          status={status}
          setName={setName}
          setViews={setViews}
          onChooseStatus={onChooseStatus}
        />
        <ModalRadio>
          <label className="modal-label__first">
            <input
              type="radio"
              name="status"
              onChange={(e) => {
                onChooseStatus(e);
              }}
              value={true}
              checked={status === true}
            />
            Show
          </label>
          <label>
            <input
              type="radio"
              name="status"
              onChange={(e) => {
                onChooseStatus(e);
              }}
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
        <Button
          color="secondary"
          onClick={() => {
            toggle();
            setError(false);
          }}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

ModalButton.defaultProps = {
  nameTemp: '',
  viewsTemp: 0,
  statusTemp: true,
};
