import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideBar = styled.section`
  display: flex;
  flex-direction: column;
`;

export const HeaderLogo = styled.div`
  display: flex;
  width: 350px;
  height: 82px;
  background-color: #38c6da;
`;

export const HeaderThumbnail = styled.div`
  margin: 15px 18px 11px 34px;
`;

export const HeaderImgLogo = styled.img`
  max-width: 100%;
`;

export const HeaderTitle = styled.h4`
  display: inline-block;
  height: 17px;
  width: 90px;
  margin-top: 27px;
  color: #ffffff;
  font-family: 'Rubik', sans-serif;
  font-size: 25px;
  font-weight: 500;
`;

export const HeaderCategory = styled.div`
  background-color: #fff;
`;

export const CategoryTitle = styled.h5`
  margin: 50px 0 21px 35px;
  color: #bcbfc4;
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
`;

export const CategoryList = styled.ul`
  padding-top: 20px;
  border-top: 1px solid #eaeced;
  list-style: none;
`;

export const CategoryItem = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  color: #757d89;
  font-family: 'Rubik', sans-serif;
  text-decoration: none;
  font-size: 18px;
  line-height: 45px;
  margin-bottom: 13px;
`;

export const TitleItem = styled.span`
  padding-left: 26px;
`;

export const CategoryIcon = styled.span`
  display: inline-block;
  width: 24px;
  color: #d5d8db;
  font-size: 30px !important;
`;

export const CategoryIconPuzzle = styled(CategoryIcon)`
  transform: rotateZ(-45deg);
`;
