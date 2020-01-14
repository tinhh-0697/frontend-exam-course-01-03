import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import firebase from '../../firebase';
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
    // eslint-disable-next-line
  }, []);
  // eslint-enable-next-line

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
        <FormModal
          name={nameTemp}
          views={viewsTemp}
          status={status}
          setName={setName}
          setViews={setViews}
          onChooseStatus={onChooseStatus}
        />
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

ModalButton.defaultProps = {
  nameTemp: '',
  viewsTemp: 0,
  statusTemp: true,
};
