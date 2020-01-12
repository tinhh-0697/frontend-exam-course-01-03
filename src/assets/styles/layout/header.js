import styled from 'styled-components';

export const HeaderSearch = styled.div`
  display: flex;
  height: 82px;
  background-color: #ffffff;
  box-shadow: 0 0 54px rgba(0, 0, 0, 0.09);
  transition: background-color 200ms;

  @media (max-width: 1140px) {
    background-color: #38c6da;
  }
`;

export const ButtonResponsive = styled.span`
  @media (max-width: 1140px) {
    position: absolute;
    width: 24px;
    height: 3px;
    background-color: #fff;
    transition: background-color 0.2s;
    transform: translate(-50%, 50%);

    &:before,
    &:after {
      content: '';
      position: absolute;
      right: 0;
      width: 24px;
      height: 3px;
      background-color: #fff;
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

  @media (max-width: 1140px) {
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

  @media (max-width: 1140px) {
    display: block;
    display: ${(props) => (props.sidebar ? 'none' : 'block')};
    margin: 25px 0 15px 15px;
  }

  button {
    color: #b8b8b8;
    background-color: transparent;
    font-size: 30px;
    border: 0;

    @media (max-width: 1140px) {
      font-size: 14px;
    }
  }

  input {
    margin-left: 30px;
    border: 0;
    color: #b5b5b5;
    font-size: 18px;
    font-weight: 300;

    :focus,
    :active {
      outline: 0;
    }

    @media (max-width: 1140px) {
      margin-left: 10px;
      vertical-align: middle;
      font-size: 16px;
      letter-spacing: 2px;
    }
  }
`;

export const HeaderSetting = styled.div`
  position: relative;
  display: ${(props) => (props.checkSidebar ? 'flex' : 'none')};
  align-items: center;
  margin-left: auto;

  @media (max-width: 530px) {
    display: ${(props) => (props.checkSidebar ? 'none' : 'block')};
  }

  .header-btn-setting {
    margin-right: 30px;
    background-color: transparent;
    cursor: pointer;

    :before {
      content: '';
      display: none;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 200px;
      height: 34px;
      background-color: transparent;
      transform: translateX(-20%);
    }

    :hover:before {
      display: block;
    }

    :hover .header-wrap-logout {
      display: block;
    }
  }

  .header-wrap-logout {
    position: absolute;
    left: -50%;
    bottom: -65%;
    z-index: 15;
    transform: translate(25%, 40%);
    display: none;
    padding: 20px 20px;
    background-color: #fff;
    font-family: 'Gelasio', serif;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);

    @media (max-width: 1140px) {
      transform: translate(13%, 40%);
    }

    button {
      width: 100%;
      margin-top: 10px;
      font-family: 'Abril Fatface', cursive;
    }
  }

  .title {
    display: inline-block;
    margin-bottom: 0;
    margin-right: 20px;
    color: #5a5a5a;
    font-size: 20px;
    white-space: nowrap;

    @media (max-width: 1140px) {
      margin-right: 7px;
      color: #fff;
    }
  }

  i {
    color: #d5d8db;
    font-size: 30px !important;

    @media (max-width: 1140px) {
      color: #fff;
    }
  }
`;
