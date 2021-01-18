import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';

const Header = () => {
  //   Redux state
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div>
      {userInfo && <span>{userInfo.name}</span>}

      <ul>
        {userInfo && <li>Profile</li>}
        {userInfo && <li onClick={logoutHandler}>Logout</li>}
        {!userInfo && <li>Login</li>}
      </ul>
    </div>
  );
};

export default Header;
