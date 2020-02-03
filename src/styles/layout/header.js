import styled from 'styled-components';
import { fontSize, fontFamily, color } from 'styles/variable';
import { breakpoints } from 'styles/mixins/responsive';

export const HeaderSearch = styled.div`
  display: flex;
  height: 82px;
  background-color: ${({ theme }) => theme.header};
  box-shadow: 0 0 54px rgba(0, 0, 0, 0.09);
  transition: background-color 200ms;

  @media (max-width: ${breakpoints.md}) {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${color.colorBrand};
  }
`;

export const ButtonResponsive = styled.span`
  @media (max-width: ${breakpoints.md}) {
    position: absolute;
    width: 24px;
    height: 3px;
    background-color: ${color.colorWhite};
    transition: background-color 0.2s;
    transform: translate(-50%, 50%);

    &:before,
    &:after {
      content: '';
      position: absolute;
      right: 0;
      width: 24px;
      height: 3px;
      background-color: ${color.colorWhite};
      transform-origin: 0 50%;
      transition: transform 0.2s;
    }

    &:before {
      top: -6px;
    }

    &:after {
      top: 6px;
    }

    &.active {
      background-color: transparent;

      :before {
        transform: translateX(4px) translateY(-3px) rotate(45deg);
      }

      :after {
        transform: translateX(4px) translateY(2px) rotate(-45deg);
      }
    }
  }
`;

export const ControlButtonResponsive = styled.button`
  display: none;

  @media (max-width: ${breakpoints.md}) {
    display: inline-block;
    position: relative;
    top: 20%;
    right: 0;
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: 0;
    cursor: pointer;

    :active,
    :focus {
      outline: 0;
    }
  }
`;

export const HeaderForm = styled.div`
  display: ${(props) => (props.sidebar ? 'block' : 'none')};
  margin: 21px 0 25px 30px;

  @media (max-width: ${breakpoints.md}) {
    display: ${(props) => (props.sidebar ? 'none' : 'block')};
    margin: 25px 0 15px 15px;
  }

  button {
    color: ${({ theme }) => theme.iconSearch};
    background-color: transparent;
    font-size: ${fontSize.fontSizeXXXLarge};
    border: 0;

    @media (max-width: ${breakpoints.md}) {
      font-size: ${fontSize.fontSizeXsmall};
    }
  }

  input {
    margin-left: 30px;
    border: 0;
    color: ${color.colorInput};
    background-color: transparent;
    font-size: ${fontSize.fontSizeMedium};
    font-weight: 300;

    :focus,
    :active {
      outline: 0;
    }

    @media (max-width: ${breakpoints.md}) {
      margin-left: 10px;
      vertical-align: middle;
      font-size: ${fontSize.fontSizeXBase};
      letter-spacing: 2px;
    }
  }
`;

export const HeaderControl = styled.div`
  display: ${(props) => (props.checkSidebar ? 'flex' : 'none')};
  align-items: center;
  width: 100%;
  margin-top: 1px;

  @media (max-width: ${breakpoints.xs}) {
    display: ${(props) => (props.checkSidebar ? 'none' : 'block')};
  }

  .header-wrap-logout {
    position: absolute;
    left: 0;
    bottom: -65%;
    z-index: 15;
    transform: translate(25%, 40%);
    display: ${(props) => (props.checkSidebar ? 'none' : 'block')};
    padding: 20px 20px;
    background-color: ${({ theme }) => theme.backgroundInputSmall};
    font-family: ${fontFamily.fontDropdownLogout};
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);

    h5 {
      color: ${({ theme }) => theme.textInputSmall};
      text-align: center;
    }

    @media (max-width: ${breakpoints.md}) {
      transform: translate(13%, 40%);
    }

    @media (max-width: ${breakpoints.xs}) {
      position: static;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05), 0 2px 10px 0 rgba(0, 0, 0, 0.1);
      transform: translate(0, 0);
    }

    button {
      width: 100%;
      margin-top: 10px;
      font-family: ${fontFamily.fontDropdownButton};
    }
  }
`;

export const HeaderSetting = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;

  .header-btn-setting {
    margin-right: 11px;
    background-color: transparent;
    cursor: pointer;

    :before {
      content: '';
      display: none;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 150px;
      height: 34px;
      background-color: transparent;
      transform: translate(61%, 10%);
    }

    :hover:before {
      display: block;
    }

    :hover .header-wrap-logout {
      display: block;
    }
  }

  .title {
    display: inline-block;
    margin-bottom: 0;
    margin-right: 20px;
    color: ${({ theme }) => theme.textHeader};
    font-size: ${fontSize.fontSizeLarge};
    white-space: nowrap;

    @media (max-width: ${breakpoints.md}) {
      margin-right: 7px;
      color: ${color.colorWhite};
    }
  }

  i {
    color: ${({ theme }) => theme.iconSetting};
    font-size: ${fontSize.fontSizeXXXXLarge};

    @media (max-width: ${breakpoints.md}) {
      color: ${color.colorWhite};
    }
  }
`;

export const ButtonSwitchTheme = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 85px;
  height: 45px;
  padding: 10px;
  margin-right: 15px;
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  overflow: hidden;
  transition: all 200ms;

  @media (max-width: ${breakpoints.ss}) {
    width: 70px;
  }

  &:focus,
  &:active {
    outline: 0;
  }

  svg {
    height: auto;
    width: 25px;

    &:first-child {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(0)' : 'translateY(100px)')};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(-100px)' : 'translateY(0)')};
    }
  }
`;
