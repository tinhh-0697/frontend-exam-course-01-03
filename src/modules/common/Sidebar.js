import React, { useContext } from 'react';
import logo from '../../assets/images/logo.png';
import { ListCategory } from './ListCategory';
import {
  HeaderLogo,
  HeaderThumbnail,
  HeaderImgLogo,
  HeaderTitle,
  SideBar,
  CategoryTitle,
  SideBarContent,
} from '../../assets/styles/layout/sidebar';
import {
  IconDashboard,
  IconHome,
  IconWidgets,
  IconElement,
  IconFileText,
  IconChart,
  IconTable,
  IconGlobal,
  IconPages,
  IconEcommerce,
} from './Icons';
import { ToggleContext } from '../context/ToggleSidebar';
import { Search } from './Search';
import { DropdownLogout } from './DropdownLogout';
import { HeaderSetting, HeaderControl } from '../../assets/styles/layout/header';

const listCategory1 = [
  { icon: IconDashboard, itemName: 'Dashboard', noti: 2, link: '/dashboard' },
  { icon: IconHome, itemName: 'Home', link: '/home' },
  { icon: IconWidgets, itemName: 'Widgets', link: '/widgets' },
  { icon: IconElement, itemName: 'Elements', link: '/' },
  { icon: IconFileText, itemName: 'Forms', link: '/forms' },
  { icon: IconChart, itemName: 'Charts', link: '/charts' },
];

const listCategory2 = [
  { icon: IconTable, itemName: 'Tables', link: '/tables' },
  { icon: IconGlobal, itemName: 'Maps', link: '/maps' },
  { icon: IconPages, itemName: 'Pages', link: '/pages' },
  { icon: IconPages, itemName: 'Blog', link: '/blog' },
  { icon: IconEcommerce, itemName: 'E-commerce', link: '/ecomerce' },
];

export const Sidebar = () => {
  const { appead } = useContext(ToggleContext);

  return (
    <SideBar appead={appead}>
      <HeaderLogo appead={appead}>
        <HeaderThumbnail>
          <HeaderImgLogo src={logo} alt="" />
        </HeaderThumbnail>
        <HeaderTitle>ORBITA</HeaderTitle>
      </HeaderLogo>
      <SideBarContent appead={appead}>
        <HeaderSetting>
          <HeaderControl checkSidebar={false}>
            <DropdownLogout />
          </HeaderControl>
        </HeaderSetting>
        <Search siderbar={true} />
        <div>
          <CategoryTitle>CATEGORY 1</CategoryTitle>
          <ListCategory list={listCategory1} />
        </div>
        <div>
          <CategoryTitle>CATEGORY 2</CategoryTitle>
          <ListCategory list={listCategory2} />
        </div>
      </SideBarContent>
    </SideBar>
  );
};
