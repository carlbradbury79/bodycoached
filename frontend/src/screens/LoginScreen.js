import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   Redux actions
  const dispatch = useDispatch();

  //   Redux state
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  //   On load, check if user is logged in
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    //   Prevent page reload
    e.preventDefault();
    // Call redux action
    dispatch(login(email, password));
  };

  return (
    <div>
      <h1>Sign In</h1>
      {error && <h6>{error}</h6>}
      {loading && <h6>Loading</h6>}
      <form onSubmit={submitHandler}>
        <label>Email:</label>
        <input
          type='email'
          name='email'
          id='email'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <input type='submit' value='Submit' />
        <br />
        <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
          New to this? Register!
        </Link>
      </form>
    </div>
  );
};

export default LoginScreen;
