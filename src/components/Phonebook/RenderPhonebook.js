import React, { Component } from 'react';
import { Box } from 'components/Box';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class RenderPhonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  lindenNumbers = () => {
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  };

  // add contact //

  componentDidMount() {
    const nevContacts = JSON.parse(localStorage.getItem('contacts'));

    this.setState({
      contacts:
        nevContacts !== null && nevContacts.length > 0
          ? nevContacts
          : this.lindenNumbers(),
    });
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  updateEvent = evt => {
    evt.preventDefault();

    if (this.auditEntry(evt.target[0].value)) {
      const nevContact = {
        id: `id-${nanoid()}`,
        name: evt.target[0].value,
        number: evt.target[1].value,
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, nevContact],
      }));

      evt.target[0].value = '';
      evt.target[1].value = '';
    }
  };

  auditEntry = namesAudit => {
    return this.state.contacts.filter(
      contact => contact.name.toLowerCase() === namesAudit.toLowerCase()
    ).length > 0
      ? window.alert(`${namesAudit} is already in contacts`)
      : true;
  };

  // deleteContact //

  handleDelete = evt => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== evt.target.id
      ),
    }));
  };

  // filter //

  filterContacts = () => {
    const state = this.state;
    const arrFil = state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(state.filter.toLowerCase())
    );
    // arrFil.length === 0 && this.state.filter !== 0 && this.Сlean();// :((

    return arrFil;
  };

  inputFilter = evt => {
    const input = evt.currentTarget.value.trim();
    this.setState({ filter: input });
  };

  Сlean = evt => {
    this.setState({ filter: '' });
  };

  render() {
    const { filter } = this.state;

    return (
      <>
        <ContactForm updateEvent={this.updateEvent} />

        <Box p={4} m={3} display="grid" border="1px solid" width="320px">
          <h2>Contacts</h2>

          <Filter
            filter={filter}
            inputFilter={this.inputFilter}
            Сlean={this.Сlean}
          />

          <ContactList
            filterContacts={this.filterContacts}
            handleDelete={this.handleDelete}
          />
        </Box>
      </>
    );
  }
}

export default RenderPhonebook;

RenderPhonebook.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  inputFilter: PropTypes.func,
  Сlean: PropTypes.func,
  filterContacts: PropTypes.func,
  handleDelete: PropTypes.func,
  updateEvent: PropTypes.func,
  auditEntry: PropTypes.func,
};
