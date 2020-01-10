import React from 'react';
import { Badge } from 'reactstrap';
import {
  CategoryList,
  CategoryItem,
  CategoryIcon,
  TitleItem,
  IconSvg,
} from '../../assets/styles/layout/sidebar';

export const ListCategory = (props) => {
  const { list } = props;
  return (
    <CategoryList>
      {list.map((item, id) => (
        <CategoryItem exact to={item.link} key={id} activeClassName="active">
          {item.iconName && <CategoryIcon className={item.iconName} />}
          {item.imgName && <IconSvg className="icon" src={item.imgName} alt="" />}
          <TitleItem>{item.itemName}</TitleItem>
          {item.noti && <Badge>{item.noti}</Badge>}
        </CategoryItem>
      ))}
    </CategoryList>
  );
};
