import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid'; // usage - uuidv4();

export default class ContactForm extends Component {
  static propTypes = {
    addContactIntoState: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { addContactIntoState } = this.props;

    addContactIntoState({
      id: uuidv4(),
      name,
      number,
    });

    this.clearInputs();
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  clearInputs = () =>
    this.setState({
      name: '',
      number: '',
    });

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            placeholder="Enter name..."
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="number">
          Number
          <input
            type="text"
            placeholder="Enter number..."
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <div>
          <button type="submit">Add contact</button>
        </div>
      </form>
    );
  }
}
