import React from 'react';
import logo from '../../assets/images/logo.png';
import {
  HeaderLogo,
  HeaderThumbnail,
  HeaderImgLogo,
  HeaderTitle,
  HeaderCategory,
  SideBar,
  CategoryTitle,
} from '../../assets/styles/layout/sidebar';
import { ListCategory } from './ListCategory';

const listCategory1 = [
  { iconName: 'fa fa-tachometer', itemName: 'Dashboard' },
  { iconName: 'fa fa-home', itemName: 'Home' },
  { iconName: 'fa fa-puzzle-piece', itemName: 'Widgets' },
  { iconName: 'fa fa-th', itemName: 'Elements' },
  { iconName: 'fa fa-file-text', itemName: 'Forms' },
  { iconName: 'fa fa-pie-chart', itemName: 'Charts' },
];

const listCategory2 = [
  { iconName: 'fa fa-tachometer', itemName: 'Tables' },
  { iconName: 'fa fa-home', itemName: 'Maps' },
  { iconName: 'fa fa-puzzle-piece', itemName: 'Pages' },
  { iconName: 'fa fa-th', itemName: 'Blog' },
  { iconName: 'fa fa-file-text', itemName: 'E-commerce' },
];

export const Sidebar = () => {
  return (
    <SideBar>
      <HeaderLogo>
        <HeaderThumbnail>
          <HeaderImgLogo src={logo} alt="" />
        </HeaderThumbnail>
        <HeaderTitle>ORBITA</HeaderTitle>
      </HeaderLogo>
      <HeaderCategory>
        <CategoryTitle>CATEGORY 1</CategoryTitle>
        <ListCategory list={listCategory1} />
      </HeaderCategory>
      <HeaderCategory>
        <CategoryTitle>CATEGORY 2</CategoryTitle>
        <ListCategory list={listCategory2} />
      </HeaderCategory>
    </SideBar>
  );
};
