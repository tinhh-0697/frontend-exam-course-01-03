import styled from 'styled-components';
import { Col } from 'reactstrap';
import { fontSize, fontFamily, color } from '../variable';

export const LoginTitle = styled.div`
  margin-bottom: 45px;
  text-align: center;

  h1 {
    font-family: ${fontFamily.fontLoginTitle};
    font-size: ${fontSize.fontSizeXXXXXLarge};
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const LoginWrap = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.16);

  .form-control {
    height: auto;
    margin: 0 5px;
    padding: 10px 0 6px 0;
  }
`;

export const LoginForm = styled.div`
  width: 100%;
  padding: 30px;

  .login-section__forgot {
    display: inline-block;
    width: 100%;
    margin-top: 20px;
    color: ${color.colorBrand};
    text-align: end;

    :hover {
      opacity: 0.6;
      text-decoration: none;
    }
  }
`;

export const LoginSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: ${fontFamily.fontBase};
`;

export const LoginInput = styled.div`
  position: relative;
  margin: 20px 3px;

  label {
    position: absolute;
    top: 0;
    left: 5px;
    color: ${color.colorLabelModal};
    font-size: ${fontSize.fontSizeXBase};
    cursor: text;
    pointer-events: none;
    transform: translateY(50%);
    transition: transform 0.2s ease-out, color 0.2s ease-out, -webkit-transform 0.2s ease-out;
  }

  input {
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid #ced4da;
    border-radius: 0;
    outline: 0;
    box-shadow: 0;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    :focus {
      border-bottom: 1px solid #38c6da;
      box-shadow: 0 1px 0 0 #38c6da;
    }

    :focus + label,
    :valid + label {
      left: 5px;
      color: ${color.colorBrand};
      font-weight: 300;
      transform: translate(-8px, -14px) scale(0.8);
    }

    :focus + .form-email,
    :valid + .form-email {
      left: 8px;
    }
  }
`;

export const TextError = styled.span`
  display: inline-block;
  margin-top: 10px;
  margin-left: 5px;
  color: ${color.colorError};
`;

export const ButtonLogin = styled.button`
  width: 100%;
  padding: 10px 0;
  margin: 10px 5px 30px;
  color: ${color.colorWhite};
  background-color: ${color.colorBrand};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border: 0;
`;
