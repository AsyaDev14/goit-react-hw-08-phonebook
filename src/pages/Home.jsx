import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='welcome-container'>
      <div className='background-image'></div>
      <div className='content'>
        <h1 className='welcome-heading'>
          Welcome to the Contact Book!
        </h1>
        <p className='welcome-text'>
          Here you can manage your contacts easily and conveniently.
          <br />
          <Link to={'/register'} className='register-home'>Sign in</Link> to start using the application.
        </p>
      </div>
    </div>
  );
};

