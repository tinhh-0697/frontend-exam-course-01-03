import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import firebase from '../../firebase';

export const ModalButton = (props) => {
  const { id, className, modalParent, toggle, title } = props;

  const onExec = () => {
    const db = firebase.firestore();
    if (id) {
      // Edit
      db.collection('articles')
        .doc(id)
        .set({});
    } else {
      // Add
      db.collection('articles').add({});
    }
  };

  return (
    <Modal isOpen={modalParent} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Views" />
        <label>
          <input type="radio" name="status" />
          Show
        </label>
        <label>
          <input type="radio" name="status" />
          Hide
        </label>
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
