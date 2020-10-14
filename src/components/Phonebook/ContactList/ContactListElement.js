import React from 'react';
import PropTypes from 'prop-types';

function ContactListElement({ renderContacts, deleteContacts }) {
  return (
    <>
      {renderContacts.map(contact => (
        <li key={contact.id}>
          <span>{`${contact.name}: ${contact.number}`}</span>
          <button type="button" onClick={() => deleteContacts(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </>
  );
}

ContactListElement.propTypes = {
  renderContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  deleteContacts: PropTypes.func.isRequired,
};

export default ContactListElement;
