import React, { useState, useContext } from 'react';
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
import { Alert } from 'reactstrap';

const Login = (props) => {
  const { history } = props;
  const [error, setError] = useState(false);
  const handleLogin = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    if (email && password) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        setError(true);
      }
    }
  };

  const { currentUser } = useContext(AuthContext);

  // If login before, you don't need render Login page (second time and after)
  if (localStorage.getItem(CHECK_LOGIN)) return <Redirect to="/" />;

  // If don't login yet, you will render Login page (first time login)
  if (currentUser) {
    localStorage.setItem(CHECK_LOGIN, true); // Check another link have login in Layout
    return <Redirect to="/" />;
  }

  return (
    <LoginSection>
      <LoginWrap md={6} lg={4}>
        <LoginForm>
          <LoginTitle>
            <h1>Login</h1>
          </LoginTitle>
          {error ? <Alert color="danger">Invaid</Alert> : ''}
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
              {props.values.email ? <TextError>{props.errors.email}</TextError> : ''}
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
              {props.values.password ? <TextError>{props.errors.password}</TextError> : ''}
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
