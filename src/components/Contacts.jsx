import React, { useEffect } from 'react'
import { ContactForm } from './contactForm/ContactForm'
import { Section } from './section/Section';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoading, selectError } from '../redux/selectors';
import { fetchContactsThunk } from '../redux/operations';

const Contacts = () => {
  const dispatch = useDispatch()
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
    useEffect(() => {
    dispatch(fetchContactsThunk())
  }, [dispatch])
  if (error) {
    return (<div>{error}</div>)
  }

  return (
    <>
      <Section title='Phonebook'>
        <ContactForm />
      </Section>
      <Section title='Contacts'>
        <Filter />
        {loading
          ? <div className='loading'>loading</div>
          : <ContactList />
        }
      </Section>
    </>
  )
}

export default Contacts