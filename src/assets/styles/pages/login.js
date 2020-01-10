import styled from 'styled-components';
import { Col } from 'reactstrap';

export const LoginTitle = styled.div`
  margin-bottom: 45px;
  text-align: center;

  h1 {
    font-family: 'Oswald', sans-serif;
    font-size: 60px;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  }
`;

export const LoginWrap = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);

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
    color: #38c6da;
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
  font-family: 'Rubik', sans-serif;
`;

export const LoginInput = styled.div`
  position: relative;
  margin: 20px 3px;

  label {
    position: absolute;
    top: 0;
    left: 5px;
    font-size: 1rem;
    color: #757575;
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
      color: #38c6da;
      font-weight: 300;
      font-size: 1rem;
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
  color: red;
`;

export const ButtonLogin = styled.button`
  width: 100%;
  padding: 10px 0;
  margin: 30px 5px;
  color: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  background-image: linear-gradient(to right top, #6ad36e, #38d394, #00d1b4, #00cccc, #38c6da);
  border: 0;
`;
