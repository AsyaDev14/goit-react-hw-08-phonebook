import React from 'react'
import { ContactForm } from './contactForm/ContactForm'
import { Section } from './section/Section';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';
import { useSelector } from 'react-redux';
import { selectLoading, selectError } from '../redux/selectors';

const Contacts = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
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