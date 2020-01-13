import React from 'react';
import Wrapper from './Wrapper';
import withLoadLayout from './withLoadLayout';
import { Redirect } from 'react-router-dom';
import { CHECK_LOGIN } from '../variable/LocalStorage';

const ActiceWithLoadLayout = withLoadLayout(Wrapper);

export const Layout = (props) => {
  console.log('Layout', props.theme);

  return localStorage.getItem(CHECK_LOGIN) ? (
    <ActiceWithLoadLayout {...props}>{props.children}</ActiceWithLoadLayout>
  ) : (
    <Redirect to="/login" />
  );
};
