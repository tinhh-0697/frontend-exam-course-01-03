import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { ElementsSection, ElementTable, ElementTools } from 'styles/pages/elements';
import { TableElement } from 'modules/components/TableElement';
import { ModalButton } from 'modules/components/ModalButton';

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
