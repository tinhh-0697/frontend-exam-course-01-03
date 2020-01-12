import React, { useContext } from 'react';
import {
  HeaderSearch,
  HeaderSetting,
  ButtonResponsive,
  ControlButtonResponsive,
} from '../../assets/styles/layout/header';
import firebase from '../../firebase';
import { CHECK_LOGIN } from '../variable/LocalStorage';
import { withRouter, Redirect } from 'react-router-dom';
import { ToggleContext } from '../layout/ToggleSidebar';
import { Search } from './Search';
import { DropdownLogout } from './DropdownLogout';

const Header = (props) => {
  const { appead } = useContext(ToggleContext);
  const { toggle } = useContext(ToggleContext);
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
    <HeaderSearch>
      <ControlButtonResponsive onClick={toggle}>
        <ButtonResponsive className={appead ? 'active' : ''} />
      </ControlButtonResponsive>
      <Search sidebar={true} />
      <HeaderSetting checkSidebar={true}>
        <h4 className="title">Katie Reed</h4>
        <div className="header-btn-setting">
          <i className="fa fa-cog" />

          <DropdownLogout handerLogout={handerLogout} />
        </div>
      </HeaderSetting>
    </HeaderSearch>
  );
};

export default withRouter(Header);
