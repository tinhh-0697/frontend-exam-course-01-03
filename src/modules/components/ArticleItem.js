import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { ModalButton } from './ModalButton';
import firebase from '../../firebase';

export const ArticleItem = (props) => {
  const { article } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const onDelete = () => {
    const db = firebase.firestore();
    if (article.id) {
      // Delete
      db.collection('articles')
        .doc(article.id)
        .delete();
    }
  };

  return (
    <tr>
      <td>
        <span className="name-element">{article.name}</span>
      </td>
      <td>{article.views}</td>
      <td>{article.status}</td>
      <td>
        <Button color="success" onClick={toggle}>
          Edit
        </Button>
        <ModalButton id={article.id} modalParent={modal} toggle={toggle} title="Edit Item" />
        <Button color="danger" onClick={onDelete}>
          Delete
        </Button>
      </td>
    </tr>
  );
};
