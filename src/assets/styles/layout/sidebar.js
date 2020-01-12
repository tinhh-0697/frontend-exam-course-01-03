import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SideBar = styled.section`
  display: flex;
  flex-direction: column;
  transition: all 200ms;
`;

export const SideBarContent = styled.div`
  position: relative;
  z-index: 15;
  background-color: #fff;
  transition: all 200ms;

  @media (max-width: 1140px) {
    visibility: ${(props) => (props.appead ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.appead ? '1' : '0')};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  width: 350px;
  height: 82px;
  background-color: #38c6da;

  @media (max-width: 1140px) {
    justify-content: center;
    align-items: center;
    width: 258px;
  }
`;

export const HeaderThumbnail = styled.div`
  margin: 15px 18px 11px 34px;

  @media (max-width: 1140px) {
    margin: 0;
    margin-right: 15px;
  }
`;

export const HeaderImgLogo = styled.img`
  max-width: 100%;
`;

export const HeaderTitle = styled.h4`
  display: inline-block;
  margin-top: 27px;
  color: #ffffff;
  font-size: 25px;
  font-weight: 500;

  @media (max-width: 1140px) {
    margin: 0;
    font-size: 18px;
  }
`;

export const HeaderCategory = styled.div`
  background-color: #fff;
`;

export const CategoryTitle = styled.h5`
  margin: 50px 0 21px 35px;
  color: #bcbfc4;
  font-size: 18px;

  @media (max-width: 1140px) {
    margin: 30px 0 21px 25px;
    font-size: 16px;
  }
`;

export const CategoryList = styled.ul`
  padding-top: 20px;
  border-top: 1px solid #eaeced;
  list-style: none;

  @media (max-width: 1140px) {
    position: relative;
    left: -16px;
  }
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

      @media (max-width: 1140px) {
        transform: translateX(-24px);
      }
    }

    > .icon {
      fill: #38c6da;
    }
  }

  :hover {
    color: #38c6da;
    text-decoration: none;

    > .icon {
      fill: #38c6da;
    }
  }

  .badge-secondary {
    margin-left: auto;
    margin-right: 31px;
    padding: 7px 21px;
    background-color: #38c6da;
    font-size: 18px;
    border-radius: 20px;

    @media (max-width: 1140px) {
      margin-right: 0;
      font-size: 12px;
    }
  }
`;

export const TitleItem = styled.span`
  padding-left: 26px;

  @media (max-width: 1140px) {
    padding-left: 14px;
    font-size: 14px;
  }
`;
