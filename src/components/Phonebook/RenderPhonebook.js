import PropTypes from "prop-types"
import { Box } from 'components/Box';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const RenderPhonebook = () => {

  const [filters, setFilter] = useState('');

  const [contacts, setContacts] = useState(() => {    
    const nevContacts = JSON.parse(localStorage.getItem('contacts'));
    return nevContacts !== null && nevContacts.length > 0
      ? nevContacts
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  });
 
 

  // add contact //

  useEffect(() => {    
  localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])
  

  const updateEvent = evt => {
    evt.preventDefault();

    if (auditEntry(evt.target[0].value)) {
      const nevContact = {
        id: `id-${nanoid()}`,
        name: evt.target[0].value,
        number: evt.target[1].value,
      };

      setContacts(prevState => [...prevState, nevContact]);

      evt.target[0].value = '';
      evt.target[1].value = '';
    }
  };

  const auditEntry = namesAudit => {
    return contacts.filter(
      contact => contact.name.toLowerCase() === namesAudit.toLowerCase()
    ).length > 0
      ? window.alert(`${namesAudit} is already in contacts`)
      : true;
  };

  // // deleteContact //

  const handleDelete = evt => {
    setContacts(prevState => 
       prevState.filter(
        contact => contact.id !== evt.target.id
      ),
    );
  };

  // // filter //

  const filterContacts = () => {

    const arrFil = contacts.filter(cont =>
      cont.name.toLowerCase().includes(filters.toLowerCase())
    );
      
    return arrFil;
  };


  const inputFilter = evt => {
    const input = evt.currentTarget.value.trim();
    setFilter(filter => (filter = input));
  };

  const Сlean = () => {
     setFilter(filters => (filters = ''));
  };


    return (
      <>
        <ContactForm updateEvent={updateEvent} />

        <Box p={4} m={3} display="grid" border="1px solid" width="320px">
          <h2>Contacts</h2>

          <Filter
            filter={filters}
            inputFilter={inputFilter}
            Сlean={Сlean}
          />

          <ContactList
            filterContacts={filterContacts}
            handleDelete={handleDelete}
          />
        </Box>
      </>
    );
  
}

export default RenderPhonebook;

RenderPhonebook.propTypes = {
  auditEntry: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  filterContacts: PropTypes.func,
  handleDelete: PropTypes.func,
  inputFilter: PropTypes.func,
  updateEvent: PropTypes.func,
  Сlean: PropTypes.func
}
