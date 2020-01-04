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
import IconDashboard from '../../assets/images/1.png';
import IconHome from '../../assets/images/2.png';
import IconWidgets from '../../assets/images/3.png';
import IconCharts from '../../assets/images/5.png';
import IconBlog from '../../assets/images/4-2.png';
import IconEcommerce from '../../assets/images/5-2.png';

const listCategory1 = [
  { imgName: IconDashboard, itemName: 'Dashboard', noti: 2 },
  { imgName: IconHome, itemName: 'Home' },
  { imgName: IconWidgets, itemName: 'Widgets' },
  { iconName: 'fa fa-th', itemName: 'Elements' },
  { iconName: 'fa fa-file-text', itemName: 'Forms' },
  { imgName: IconCharts, itemName: 'Charts' },
];

const listCategory2 = [
  { iconName: 'fa fa-table', itemName: 'Tables' },
  { iconName: 'fa fa-globe', itemName: 'Maps' },
  { iconName: 'fa fa-file', itemName: 'Pages' },
  { imgName: IconBlog, itemName: 'Blog' },
  { imgName: IconEcommerce, itemName: 'E-commerce' },
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
