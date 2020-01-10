import React from 'react';
import { CategoryList } from '../../assets/styles/layout/sidebar';
import { ListItem } from '../components/ListItem';

export const ListCategory = (props) => {
  const { list } = props;

  return (
    <CategoryList>
      {list.map((item, id) => (
        <ListItem {...item} key={id} />
      ))}
    </CategoryList>
  );
};
