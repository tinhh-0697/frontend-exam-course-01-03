import React, { useContext } from 'react';
import {
  HeaderSearch,
  HeaderSetting,
  ButtonResponsive,
  ControlButtonResponsive,
  ButtonSwitchTheme,
  HeaderControl,
} from '../../assets/styles/layout/header';

import { ToggleContext } from '../context/ToggleSidebar';
import { Search } from './Search';
import { DropdownLogout } from './DropdownLogout';
import { ReactComponent as MoonIcon } from '../../assets/images/moon.svg';
import { ReactComponent as SunIcon } from '../../assets/images/sun.svg';

const Header = (props) => {
  const { toggleTheme, theme } = props;
  const isLight = theme === 'light';
  const { appead, toggle } = useContext(ToggleContext);

  return (
    <HeaderSearch>
      <ControlButtonResponsive onClick={toggle}>
        <ButtonResponsive className={appead ? 'active' : ''} />
      </ControlButtonResponsive>
      <Search sidebar={true} />
      <HeaderSetting>
        <ButtonSwitchTheme onClick={toggleTheme} lightTheme={isLight}>
          <SunIcon />
          <MoonIcon />
        </ButtonSwitchTheme>
        <HeaderControl checkSidebar={true}>
          <h4 className="title">Katie Reed</h4>
          <div className="header-btn-setting">
            <i className="fa fa-cog" />

            <DropdownLogout />
          </div>
        </HeaderControl>
      </HeaderSetting>
    </HeaderSearch>
  );
};

export default Header;
