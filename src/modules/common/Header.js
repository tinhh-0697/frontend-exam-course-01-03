import React from 'react';
import { HeaderSearch, HeaderSetting, HeaderForm } from '../../assets/styles/layout/header';
import firebase from '../../firebase';
import { CHECK_LOGIN } from '../variable/LocalStorage';
import { withRouter, Redirect } from 'react-router-dom';

const Header = (props) => {
  const handerLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        console.log('Sign out');
        localStorage.removeItem(CHECK_LOGIN);
        return <Redirect to="/" />;
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <HeaderSearch>
      <HeaderForm>
        <button className="fa fa-search"></button>
        <input placeholder="Search now..." />
      </HeaderForm>
      <HeaderSetting>
        <h4 className="title">Katie Reed</h4>
        <div className="header-btn-setting">
          <i className="fa fa-cog" />

          <div className="header-wrap-logout">
            <h5>Hello, Katie Reed</h5>
            <button className="btn btn-danger" onClick={handerLogout}>
              Logout
            </button>
          </div>
        </div>
      </HeaderSetting>
    </HeaderSearch>
  );
};

export default withRouter(Header);
