import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
  font-size: 25px;
  font-weight: 500;
`;

export const HeaderCategory = styled.div`
  background-color: #fff;
`;

export const CategoryTitle = styled.h5`
  margin: 50px 0 21px 35px;
  color: #bcbfc4;
  font-size: 18px;
`;

export const CategoryList = styled.ul`
  padding-top: 20px;
  border-top: 1px solid #eaeced;
  list-style: none;
`;

export const CategoryItem = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 13px;
  color: #757d89;
  text-decoration: none;
  font-size: 18px;
  line-height: 45px;

  &.active {
    position: relative;
    color: #38c6da;

    :before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      height: 45px;
      background-color: #38c6da;
      transform: translateX(-40px);
    }

    > .icon {
      filter: invert(80%) sepia(9%) saturate(3658%) hue-rotate(146deg) brightness(88%) contrast(92%);
    }
  }

  :hover {
    color: #38c6da;
    text-decoration: none;

    > .icon {
      filter: invert(80%) sepia(9%) saturate(3658%) hue-rotate(146deg) brightness(88%) contrast(92%);
    }
  }

  .badge-secondary {
    margin-left: auto;
    margin-right: 31px;
    padding: 7px 21px;
    background-color: #38c6da;
    font-size: 18px;
    border-radius: 20px;
  }
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

export const IconSvg = styled.img`
  width: 25px;
  height: 25px;
  filter: invert(90%) sepia(20%) saturate(26%) hue-rotate(169deg) brightness(94%) contrast(91%);
`;
