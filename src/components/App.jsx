import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContactsThunk } from '../redux/operations';
import { Route, Routes } from 'react-router-dom';
import { Register } from '../pages/Register';
import { Navbar } from '../pages/Navbar';
import { Login } from '../pages/Login';
import Contacts from './Contacts';
import { Home } from '../pages/Home';
// /register - публічний маршрут реєстрації нового користувача з формою
// /login - публічний маршрут логіна існуючого користувача з формою
// /contacts - приватний маршрут для роботи зі списком контактів користувача
// Додай компонент навігації Navigation з посиланнями для переходу по маршрутах.

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContactsThunk())
  }, [dispatch])


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/contacts' element={<Contacts/>} />
      </Routes>
  
    </>
  );
}

export default App;
