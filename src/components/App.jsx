import React, { useEffect } from 'react';
import { ContactForm } from './contactForm/ContactForm'
import { Section } from './section/Section';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from '../redux/operations';
import { selectError, selectLoading } from '../redux/selectors';
import { Route, Routes } from 'react-router-dom';
import { Register } from '../pages/Register';
import { Navbar } from './Navbar';
// /register - публічний маршрут реєстрації нового користувача з формою
// /login - публічний маршрут логіна існуючого користувача з формою
// /contacts - приватний маршрут для роботи зі списком контактів користувача
// Додай компонент навігації Navigation з посиланнями для переходу по маршрутах.

const App = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContactsThunk())
  }, [dispatch])


  if (error) {
    return (<div>{error}</div>)
  }
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<h1>Home Page</h1> } />
        <Route path='/register' element={<Register/>} />
        <Route path='/contacts' element={<h1>Here must be privat contacts?</h1> } />
      </Routes>
      {/* <Section title='Phonebook'>
        <ContactForm />
      </Section>
      <Section title='Contacts'>
        <Filter />
        {loading
          ? <div className='loading'>loading</div>
          : <ContactList />
        }
      </Section> */}
    </>
  );
}

export default App;
