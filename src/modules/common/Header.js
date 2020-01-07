import React, { useContext, useEffect } from 'react';
import { HeaderSearch, HeaderSetting, HeaderForm } from '../../assets/styles/layout/header';
import firebase from '../../firebase';
import { AuthContext } from '../../Auth';

const Header = (props) => {
  const handerLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        console.log('Sign out');
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    console.log(currentUser);
    console.log('History => ' + props.history);
  });

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
            <button onClick={handerLogout}>Logout</button>
          </div>
        </div>
      </HeaderSetting>
    </HeaderSearch>
  );
};

export default Header;
