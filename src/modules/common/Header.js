import React from 'react';
import { HeaderSearch, HeaderSetting, HeaderForm } from '../../assets/styles/layout/header';

export const Header = () => {
  return (
    <HeaderSearch>
      <HeaderForm>
        <button className="fa fa-search"></button>
        <input placeholder="Search now..." />
      </HeaderForm>
      <HeaderSetting>
        <h4 className="title">Katie Reed</h4>
        <i className="fa fa-cog" />
      </HeaderSetting>
    </HeaderSearch>
  );
};
