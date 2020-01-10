import React from 'react';
import { CategoryItem, TitleItem } from '../../assets/styles/layout/sidebar';
import { Badge } from 'reactstrap';
import styled from 'styled-components';
export const ListItem = (props) => {
  const { link, itemName, noti, icon } = props;

  const Icon = styled(icon)`
    width: 25px;
    height: 25px;
    fill: #d5d8db;

    @media (max-width: 1120px) {
      width: 20px;
      height: 20px;
    }
  `;

  return (
    <CategoryItem exact to={link} activeClassName="active">
      <Icon className="icon" />
      <TitleItem>{itemName}</TitleItem>
      {noti && <Badge>{noti}</Badge>}
    </CategoryItem>
  );
};
