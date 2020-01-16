import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { fontSize, color } from '../variable';
import { breakpoints } from '../mixins/responsive';

export const SideBar = styled.section`
  display: flex;
  flex-direction: column;
  transition: all 200ms;

  @media (max-width: ${breakpoints.md}) {
    position: absolute;
    visibility: hidden;
    height: 100%;
  }
`;

export const SideBarContent = styled.div`
  position: relative;
  height: calc(100% - 8.5%);
  z-index: 15;
  background-color: ${({ theme }) => theme.sidebar};
  transition: all 200ms;

  @media (max-width: ${breakpoints.md}) {
    height: 80%;
    overflow-y: auto;
    scrollbar-width: none;
    visibility: ${(props) => (props.appead ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.appead ? '1' : '0')};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);

    &::-webkit-scrollbar {
      width: 2px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.scrollTrack};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.scrollThumb};
    }
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  width: 350px;
  height: 82px;
  visibility: visible;
  background-color: ${color.colorBrand};

  @media (max-width: ${breakpoints.md}) {
    justify-content: center;
    align-items: center;
    width: 258px;
  }
`;

export const HeaderThumbnail = styled.div`
  margin: 15px 18px 11px 34px;

  @media (max-width: ${breakpoints.md}) {
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
  color: ${color.colorWhite};
  font-size: ${fontSize.fontSizeXXLarge};
  font-weight: 500;

  @media (max-width: ${breakpoints.md}) {
    margin: 0;
    font-size: ${fontSize.fontSizeMedium};
  }
`;

export const CategoryTitle = styled.h5`
  margin: 50px 0 21px 35px;
  color: ${color.colorTitleCategory};
  font-size: ${fontSize.fontSizeMedium};

  @media (max-width: ${breakpoints.md}) {
    margin: 30px 0 21px 25px;
    font-size: ${fontSize.fontSizeXBase};
  }
`;

export const CategoryList = styled.ul`
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.borderTextSidebar};
  list-style: none;

  @media (max-width: ${breakpoints.md}) {
    position: relative;
    left: -16px;
  }
`;

export const CategoryItem = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 13px;
  color: ${({ theme }) => theme.textSidebar};
  text-decoration: none;
  font-size: ${fontSize.fontSizeMedium};
  line-height: 45px;

  &.active {
    position: relative;
    color: ${color.colorBrand};

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

      @media (max-width: ${breakpoints.md}) {
        transform: translateX(-24px);
      }
    }

    > .icon {
      fill: #38c6da;
    }
  }

  :hover {
    color: ${color.colorBrand};
    text-decoration: none;

    > .icon {
      fill: #38c6da;
    }
  }

  .badge-secondary {
    margin-left: auto;
    margin-right: 31px;
    padding: 7px 21px;
    background-color: ${color.colorBrand};
    font-size: ${fontSize.fontSizeMedium};
    border-radius: 20px;

    @media (max-width: ${breakpoints.md}) {
      margin-right: 0;
      font-size: ${fontSize.fontSizeTiny};
    }
  }
`;

export const TitleItem = styled.span`
  padding-left: 26px;

  @media (max-width: ${breakpoints.md}) {
    padding-left: 14px;
    font-size: ${fontSize.fontSizeXsmall};
  }
`;
