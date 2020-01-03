import React from 'react';
import Wrapper from './Wrapper';
import withLoadLayout from './withLoadLayout';

const ActiceWithLoadLayout = withLoadLayout(Wrapper);

export const Layout = (props) => {
  return <ActiceWithLoadLayout>{props.children}</ActiceWithLoadLayout>;
};
