import React from 'react';
import { ModalInput, ErrorText } from 'styles/pages/elements';

export const InputModal = (props) => {
  const { handleChange, setName, setViews } = props;

  return (
    <>
      <ModalInput>
        <input
          type="text"
          name="name"
          value={props.values.name}
          autoComplete="off"
          required
          className="form-control"
          onChange={(e) => {
            handleChange(e);
            setName(e.target.value);
          }}
        />
        <label>Name</label>
        {props.values.name ? <ErrorText>{props.errors.name}</ErrorText> : ''}
      </ModalInput>
      <ModalInput>
        <input
          type="number"
          name="views"
          value={props.values.views}
          autoComplete="off"
          required
          className="form-control"
          onChange={(e) => {
            handleChange(e);
            setViews(e.target.value);
          }}
        />
        <label>Views</label>
        {props.values.views ? <ErrorText>{props.errors.views}</ErrorText> : ''}
      </ModalInput>
    </>
  );
};
