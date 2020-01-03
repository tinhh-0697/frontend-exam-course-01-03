import React from 'react';
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
            <CategoryIcon className={item.iconName} />
            <TitleItem>{item.itemName}</TitleItem>
          </CategoryItem>
        ))}
      </CategoryList>
    </>
  );
};
