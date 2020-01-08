import React from 'react';
import Wrapper from './Wrapper';
import withLoadLayout from './withLoadLayout';
import { Redirect } from 'react-router-dom';
import { CHECK_LOGIN } from '../variable/LocalStorage';

const ActiceWithLoadLayout = withLoadLayout(Wrapper);

export const Layout = (props) => {
  return localStorage.getItem(CHECK_LOGIN) ? (
    <ActiceWithLoadLayout>{props.children}</ActiceWithLoadLayout>
  ) : (
    <Redirect to="/" />
  );
};
