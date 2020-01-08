import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { LoginSection } from '../../assets/styles/pages/login';
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
      history.push('/elements');
    } catch (error) {
      alert(error);
    }
  };

  const { currentUser } = useContext(AuthContext);

  // If login before, you don't need render Login page
  if (localStorage.getItem(CHECK_LOGIN)) return <Redirect to="/elements" />;

  // If don't login yet, you will render Login page
  if (currentUser) {
    localStorage.setItem(CHECK_LOGIN, true); // Check another link have login in Layout
    return <Redirect to="/elements" />;
  }

  return (
    <LoginSection>
      <div className="login-section__wrap col-md-6 col-lg-5">
        <div className="login-section__form">
          <div className="login-section__title text-center">
            <h1>Login</h1>
          </div>
          <form onSubmit={handleLogin}>
            <div className="login-section__input">
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
              <span className="text-error">{props.errors.email}</span>
            </div>
            <div className="login-section__input">
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
              <span className="text-error">{props.errors.password}</span>
            </div>
            <div className="login-section__button">
              <button type="submit" className="btn btn-success">
                Sign In
              </button>
            </div>
            <p className="login-section__register">
              You don't have account &nbsp;
              <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </LoginSection>
  );
};

export default Login;
