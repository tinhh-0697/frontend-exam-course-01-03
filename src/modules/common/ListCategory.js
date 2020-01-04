import React from 'react';
import { Badge } from 'reactstrap';
import {
  CategoryList,
  CategoryItem,
  CategoryIcon,
  TitleItem,
} from '../../assets/styles/layout/sidebar';

export const ListCategory = (props) => {
  const { list } = props;
  return (
    <>
      <CategoryList>
        {list.map((item, id) => (
          <CategoryItem to="/" key={id}>
            {item.iconName && <CategoryIcon className={item.iconName} />}
            {item.imgName && <img src={item.imgName} alt="" />}
            <TitleItem>{item.itemName}</TitleItem>
            {item.noti && <Badge>{item.noti}</Badge>}
          </CategoryItem>
        ))}
      </CategoryList>
    </>
  );
};
