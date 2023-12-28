import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutThunk } from '../redux/auth/authOperations'
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectUserEmail } from "../redux/auth/authSelectors";

export function UserMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);

  const logout = () => {
    dispatch(logoutThunk()).unwrap()
      .then(() => {
        navigate('/')
      }).catch((err) => {
        alert('error')
      })
  }
  return (
    <div className='user-menu'>
      {userEmail && <p className='user-email'>{userEmail}</p>}

      <button onClick={logout} className='login-button'>
        Logout
      </button>
    </div>
  )
}
