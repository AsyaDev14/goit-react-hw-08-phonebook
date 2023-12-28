import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Register } from '../pages/Register';
import { Navbar } from '../pages/Navbar';
import { Login } from '../pages/Login';
import Contacts from './Contacts';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { refreshThunk } from '../redux/auth/authOperations';
import { PrivateRoute } from 'routes/PrivateRoutes';
import { PublicRoute } from 'routes/PublickRoutes';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch])


  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path='/register'
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path='/login'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          } />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  );
}

export default App;
