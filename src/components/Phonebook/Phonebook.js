import React, { Component } from 'react';
import Notyf from 'notyf-js';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import 'notyf-js/dist/notyf.min.css';

const notyf = new Notyf();

const filterContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase()),
  );
};

export default class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContactIntoState = newContact => {
    const { contacts } = this.state;
    if (filterContacts(contacts, newContact.name).length) {
      notyf.alert(`${newContact.name} is allready in phonebook`);
      return;
    }

    this.setState(state => ({
      contacts: [...state.contacts, newContact],
    }));
  };

  deleteContactFromState = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChanges = filter => {
    this.setState({ filter });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = filterContacts(contacts, filter);

    return (
      <>
        <h1>Phonebok</h1>
        <ContactForm addContactIntoState={this.addContactIntoState} />

        <h2>Contacts</h2>
        <Filter filter={filter} onFilter={this.handleFilterChanges} />
        <ContactList
          renderContacts={filteredContacts}
          deleteContacts={this.deleteContactFromState}
        />
      </>
    );
  }
}
