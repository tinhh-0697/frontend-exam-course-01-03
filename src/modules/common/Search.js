import React from 'react';
import { HeaderForm } from 'styles/layout/header';

export const Search = (props) => {
  const { sidebar } = props;
  return (
    <HeaderForm sidebar={sidebar}>
      <button className="fa fa-search"></button>
      <input placeholder="Search now..." />
    </HeaderForm>
  );
};
