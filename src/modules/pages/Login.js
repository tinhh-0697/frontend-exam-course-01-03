import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import {
  LoginSection,
  LoginInput,
  TextError,
  ButtonLogin,
  LoginTitle,
  LoginForm,
  LoginWrap,
} from '../../assets/styles/pages/login';
import { CHECK_LOGIN } from '../variable/LocalStorage';
import { AuthContext } from '../../Auth';
import firebase from '../../firebase';

const Login = (props) => {
  const { history } = props;
  const handleLogin = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      await firebase.auth().signInWithEmailAndPassword(email.value, password.value);
      history.push('/');
    } catch (error) {
      alert(error);
    }
  };

  const { currentUser } = useContext(AuthContext);

  // If login before, you don't need render Login page
  if (localStorage.getItem(CHECK_LOGIN)) return <Redirect to="/" />;

  // If don't login yet, you will render Login page
  if (currentUser) {
    localStorage.setItem(CHECK_LOGIN, true); // Check another link have login in Layout
    return <Redirect to="/" />;
  }

  return (
    <LoginSection>
      <LoginWrap md={6} lg={5}>
        <LoginForm>
          <LoginTitle>
            <h1>Login</h1>
          </LoginTitle>
          <form onSubmit={handleLogin}>
            <LoginInput>
              <input
                type="text"
                name="email"
                autoComplete="off"
                required
                className="form-control"
                value={props.values.email}
                onChange={props.handleChange}
              />
              <label className="form-email">Email</label>
              <TextError>{props.errors.email}</TextError>
            </LoginInput>
            <LoginInput>
              <input
                type="password"
                name="password"
                autoComplete="off"
                required
                className="form-control"
                value={props.values.password}
                onChange={props.handleChange}
              />
              <label>Password</label>
              <TextError>{props.errors.password}</TextError>
            </LoginInput>
            <ButtonLogin color="success" type="submit">
              Sign In
            </ButtonLogin>
          </form>
        </LoginForm>
      </LoginWrap>
    </LoginSection>
  );
};

export default Login;
