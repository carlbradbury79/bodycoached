import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      console.log('userReducer login request');
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      console.log('userReducer login success');
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      console.log('userReducer login fail');
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      console.log('userReducer REGISTER request');
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      console.log('userReducer REGISTER success');
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      console.log('userReducer REGISTER fail');
      console.log('?', action.payload);
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
