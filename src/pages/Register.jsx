import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../redux/auth/authOperations';

export const Register = () => {
  // take all data in inputs to one obj
  const { register, handleSubmit } = useForm();
  // register => submit
  const dispatch = useDispatch()
  const submit = data => {
    console.log('data', data);
    dispatch(registerThunk(data))
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>Name</span>
          <input
            {...register('name')}
            type="text"
            placeholder='Enter the Name' />
        </label>

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
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}
