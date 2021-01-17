import axios from 'axios';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../constants/userConstants';

// user login using email/password
export const login = (email, password) => async (dispatch) => {
  console.log('login action attempt', email, password);
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users/login',
      {
        email,
        password,
      },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    console.log('login action fail');
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Clear redux and remove token from localstorage
export const logout = () => async (dispatch) => {
  localStorage.removeItem('userInfo');
  //   const { data } = await axios.get('/api/users/logout');
  dispatch({ type: USER_LOGOUT });
  document.location.href = '/login';
};
