import React from 'react';
import { ModalInput, ModalRadio, ErrorText } from '../../assets/styles/pages/elements';

export const InputName = (props) => {
  const { handleChange, setName, setViews, onChooseStatus } = props;

  const onCheck = (status) => {
    if (typeof status === 'boolean') {
      return status === true;
    } else {
      return status === 'true';
    }
  };

  const onCheck1 = (status) => {
    if (typeof status === 'boolean') {
      return status === false;
    } else {
      return status === 'false';
    }
  };

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
        <ErrorText>{props.errors.name}</ErrorText>
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
        <ErrorText>{props.errors.views}</ErrorText>
      </ModalInput>
      <ModalRadio>
        <label className="modal-label__first">
          <input
            type="radio"
            name="status"
            onChange={(e) => {
              handleChange(e);
              onChooseStatus(e);
            }}
            value={true}
            checked={onCheck(props.values.status)}
          />
          Show
        </label>
        <label>
          <input
            type="radio"
            name="status"
            onChange={(e) => {
              handleChange(e);
              onChooseStatus(e);
            }}
            value={false}
            checked={onCheck1(props.values.status)}
          />
          Hide
        </label>
        <ErrorText>{props.errors.status}</ErrorText>
      </ModalRadio>
    </>
  );
};
