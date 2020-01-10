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
import IconDashboard from '../../assets/images/panel.svg';
import IconHome from '../../assets/images/home.svg';
import IconWidgets from '../../assets/images/toy.svg';
import IconElement from '../../assets/images/grid.svg';
import IconFileText from '../../assets/images/files-and-folders.svg';
import IconChart from '../../assets/images/pie-chart.svg';
import IconTable from '../../assets/images/table.svg';
import IconGlobal from '../../assets/images/world.svg';
import IconPage from '../../assets/images/page.svg';
import IconBlog from '../../assets/images/4-2.png';
import IconEcommerce from '../../assets/images/coin.svg';

const listCategory1 = [
  { imgName: IconDashboard, itemName: 'Dashboard', noti: 2, link: '/dashboard' },
  { imgName: IconHome, itemName: 'Home', link: '/home' },
  { imgName: IconWidgets, itemName: 'Widgets', link: '/widgets' },
  { imgName: IconElement, itemName: 'Elements', link: '/' },
  { imgName: IconFileText, itemName: 'Forms', link: '/forms' },
  { imgName: IconChart, itemName: 'Charts', link: '/charts' },
];

const listCategory2 = [
  { imgName: IconTable, itemName: 'Tables', link: '/tables' },
  { imgName: IconGlobal, itemName: 'Maps', link: '/maps' },
  { imgName: IconPage, itemName: 'Pages', link: '/pages' },
  { imgName: IconBlog, itemName: 'Blog', link: '/blog' },
  { imgName: IconEcommerce, itemName: 'E-commerce', link: '/ecomerce' },
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
