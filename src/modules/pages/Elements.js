import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { ElementsSection } from '../../assets/styles/pages/elements';
import { TableElement } from '../components/TableElement';
import { ModalButton } from '../components/ModalButton';

export const Elements = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <ElementsSection>
      <div className="element__table">
        <div className="element__tools">
          <h5>Articles</h5>
          <Button color="primary" onClick={toggle}>
            Add New +
          </Button>
          <ModalButton check={true} modalParent={modal} toggle={toggle} title="Add New Item" />
        </div>
        <TableElement />
      </div>
    </ElementsSection>
  );
};
