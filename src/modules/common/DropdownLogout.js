import React from 'react';
import { Redirect } from 'react-router-dom';
import { CHECK_LOGIN } from '../variable/LocalStorage';
import firebase from '../../firebase';

export const DropdownLogout = (props) => {
  const handerLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        console.log('Sign out');
        localStorage.removeItem(CHECK_LOGIN);
        return <Redirect to="/login" />;
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <div className="header-wrap-logout">
      <h5>Hello, Katie Reed</h5>
      <button className="btn btn-danger" onClick={handerLogout}>
        Logout
      </button>
    </div>
  );
};
