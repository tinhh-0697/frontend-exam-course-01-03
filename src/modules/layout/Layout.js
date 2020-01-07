import React, { useContext } from 'react';
import Wrapper from './Wrapper';
import withLoadLayout from './withLoadLayout';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../Auth';

const ActiceWithLoadLayout = withLoadLayout(Wrapper);

export const Layout = (props) => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? (
    <ActiceWithLoadLayout>{props.children}</ActiceWithLoadLayout>
  ) : (
    <Redirect to="/" />
  );
};
