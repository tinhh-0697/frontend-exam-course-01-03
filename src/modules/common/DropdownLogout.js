import React from 'react';
import { CHECK_LOGIN } from '../variable/LocalStorage';
import firebase from '../../firebase';

export const DropdownLogout = () => {
  const handerLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        console.log('Sign out');
        localStorage.removeItem(CHECK_LOGIN);
        window.location.reload();
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
