import React from 'react'
import ContactForm from './ContactForm.jsx'
import ContactHeader from './ContactHeader.jsx'
import ContactLinks from './ContactLinks.jsx'
import '../sass/styles.scss'

export default class Contact extends React.Component {
  render() {
    return (
      <div className='contact'>
        <ContactHeader />
        <ContactForm />
        <ContactLinks />
      </div>
    );
  }
}
