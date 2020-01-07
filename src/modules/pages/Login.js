import React, { useCallback, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { LoginSection } from '../../assets/styles/pages/login';
import { AuthContext } from '../../Auth';
import firebase from '../../firebase';

const Login = (props) => {
  const { history } = props;
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      try {
        await firebase.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push('/elements');
      } catch (error) {
        alert(error);
      }
    },
    [history],
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
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
              />
              <label className="form-email">Email</label>
            </div>
            <div className="login-section__input">
              <input
                type="password"
                name="password"
                autoComplete="off"
                required
                className="form-control"
              />
              <label>Password</label>
            </div>
            <Link to="/">Forgot Password</Link>
            <div className="login-section__button">
              <button type="submit" className="btn btn-success">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </LoginSection>
  );
};

export default Login;
