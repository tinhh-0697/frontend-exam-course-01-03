import React from 'react';
import { ModalInput } from '../../assets/styles/pages/elements';

export const InputName = (props) => {
  const { setName, nameTemp } = props;
  return (
    <ModalInput>
      <input
        type="text"
        name="name"
        defaultValue={nameTemp}
        // value={props.values.name}
        autoComplete="off"
        required
        className="form-control"
        onChange={(e) => {
          // props.handleChange(e);
          setName(e.target.value);
        }}
      />
      <label>Name</label>
      <span>{props.errors.name}</span>
    </ModalInput>
  );
};
