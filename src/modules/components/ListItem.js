import React from 'react';
import { CategoryItem, TitleItem } from '../../assets/styles/layout/sidebar';
import { Badge } from 'reactstrap';
import styled from 'styled-components';
import { breakpoints } from '../../assets/styles/mixins/responsive';
export const ListItem = (props) => {
  const { link, itemName, noti, icon } = props;

  const Icon = styled(icon)`
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.iconCategory};

    @media (max-width: ${breakpoints.md}) {
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
