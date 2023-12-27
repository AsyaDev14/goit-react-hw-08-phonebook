import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutThunk } from '../redux/auth/authOperations'
import { useNavigate } from 'react-router-dom';

export function UserMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutThunk()).unwrap()
      .then(() => {
        navigate('/')
      }).catch((err) => {
        alert('error')
      })
  }
  return (
    <div>
      {/* <p>mango@mail.com</p> */}
      <button onClick={logout}>
        Logout
      </button>
    </div>
  )
}
