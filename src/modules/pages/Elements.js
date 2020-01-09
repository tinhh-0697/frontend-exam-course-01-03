import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { ElementsSection, ElementTable, ElementTools } from '../../assets/styles/pages/elements';
import { TableElement } from '../components/TableElement';
import { ModalButton } from '../components/ModalButton';

export const Elements = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <ElementsSection>
      <ElementTable>
        <ElementTools>
          <h5>Articles</h5>
          <Button color="primary" onClick={toggle}>
            Add New +
          </Button>
          <ModalButton modalParent={modal} toggle={toggle} title="Add New Item" />
        </ElementTools>
        <TableElement />
      </ElementTable>
    </ElementsSection>
  );
};
