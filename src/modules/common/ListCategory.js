import React from 'react';
import { CategoryList } from 'styles/layout/sidebar';
import { ListItem } from 'modules/components/ListItem';

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
