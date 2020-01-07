import styled from 'styled-components';

export const HeaderSearch = styled.div`
  display: flex;
  justify-content: space-between;
  height: 82px;
  background-color: #ffffff;
  box-shadow: 0 0 54px rgba(0, 0, 0, 0.09);
`;

export const HeaderForm = styled.div`
  margin: 21px 0 25px 30px;

  button {
    color: #b8b8b8;
    background-color: transparent;
    font-size: 30px !important;
    border: 0;
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
  }
`;

export const HeaderSetting = styled.div`
  position: relative;
  display: flex;
  align-items: center;

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
    bottom: -50%;
    transform: translate(25%, 40%);
    display: none;
    padding: 20px 20px;
    background-color: #fff;
    border: 1px solid #000;

    button {
      width: 100%;
    }
  }

  .title {
    display: inline-block;
    margin-bottom: 0;
    margin-right: 20px;
    color: #5a5a5a;
    font-size: 20px;
  }

  i {
    color: #d5d8db;
    font-size: 30px !important;
  }
`;
