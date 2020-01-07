import styled from 'styled-components';

export const LoginSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Rubik', sans-serif;

  .login-section__title {
    margin-bottom: 45px;

    h1 {
      font-family: 'Oswald', sans-serif;
      font-size: 60px;
      text-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
    }
  }

  .login-section__wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);

    .form-control {
      height: auto;
      padding: 10px 0 6px 0;
      margin: 0 5px;
    }
  }

  .login-section__form {
    width: 100%;
    padding: 30px;

    a {
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
  }

  .login-section__input {
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
  }

  button {
    width: 100%;
    padding: 10px 0;
    margin: 30px 5px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    background-image: linear-gradient(to right top, #6ad36e, #38d394, #00d1b4, #00cccc, #38c6da);
    border: 0;
  }
`;
