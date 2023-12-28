import React, { useEffect } from 'react'
import { ContactForm } from '../components/contactForm/ContactForm'
import { Section } from '../components/section/Section';
import { Filter } from '../components/filter/Filter';
import { ContactList } from '../components/contactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoading, selectError } from '../redux/reduxContacts/selectors';
import { fetchContactsThunk } from '../redux/reduxContacts/operations';
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