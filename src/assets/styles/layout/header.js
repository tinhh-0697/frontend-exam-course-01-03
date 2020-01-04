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
  display: flex;
  align-items: center;

  .title {
    display: inline-block;
    margin-bottom: 0;
    margin-right: 20px;
    color: #5a5a5a;
    font-size: 20px;
  }

  i {
    margin-right: 30px;
    color: #d5d8db;
    font-size: 30px !important;
  }
`;
