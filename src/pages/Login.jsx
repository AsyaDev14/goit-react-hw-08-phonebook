import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../redux/auth/authOperations';
// import { useNavigate } from 'react-router-dom';

export const Login = () => {
  // const navigate = useNavigate()
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch()
  const submit = data => {
    console.log('data', data);
    dispatch(loginThunk(data)).unwrap()
      .then(() => {
        // navigate('/contacts')
      }).catch((err) => {
        alert('error')
      })
  }
  return (
    <div className='login-box'>
      <form onSubmit={handleSubmit(submit)} className='login-form'>
        <label>
          <span>Email</span>
          <input
            {...register('email')}
            type="text"
            placeholder='Enter the email' />
        </label>

        <label>
          <span>Password</span>
          <input
            {...register('password')}
            type="password"
            placeholder='Enter the password' />
        </label>
        <button type='submit' className='login-button'>Login</button>
      </form>
    </div>
  )
}
