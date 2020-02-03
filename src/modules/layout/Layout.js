import React from 'react';
import Wrapper from 'modules/layout/Wrapper';
import withLoadLayout from 'modules/layout/withLoadLayout';
import { Redirect } from 'react-router-dom';
import { CHECK_LOGIN } from 'modules/variable/LocalStorage';

const ActiceWithLoadLayout = withLoadLayout(Wrapper);

export const Layout = (props) => {
  return localStorage.getItem(CHECK_LOGIN) ? (
    <ActiceWithLoadLayout {...props}>{props.children}</ActiceWithLoadLayout>
  ) : (
    <Redirect to="/login" />
  );
};
