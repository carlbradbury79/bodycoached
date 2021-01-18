import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';

const RegisterScreen = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  //   Redux actions
  const dispatch = useDispatch();

  //   Redux state
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

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
    if (password !== confirmPassword) {
      setMessage("passwords don't match");
    } else {
      // Call redux action
      dispatch(register(name, email, password));
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {message && <h6>{message}</h6>}
      {error && <h6>{error}</h6>}
      {loading && <h6>Loading</h6>}
      <form onSubmit={submitHandler}>
        <label>Name:</label>
        <input
          type='text'
          name='name'
          id='name'
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
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
        <label>Confirm Password</label>
        <input
          type='password'
          name='confirmPassword'
          id='confirmPassword'
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <br />
        <input type='submit' value='Register' />
        <br />
        <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
          Have account? Login
        </Link>
      </form>
    </div>
  );
};

export default RegisterScreen;
