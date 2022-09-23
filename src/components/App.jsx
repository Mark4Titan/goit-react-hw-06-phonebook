// import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { useState, useEffect } from 'react';
import { ContactForm } from './Phonebook/ContactForm/ContactForm';
import { Filter } from './Phonebook/Filter/Filter';
import { ContactList } from './Phonebook/ContactList/ContactList';




const App = () => {
  const [filters, setFilter] = useState('');

  const [contacts] = useState(() => {
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
  }, [contacts]);



    
  

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
      <ContactForm />

      <Box p={4} m={3} display="grid" border="1px solid" width="320px">
        <h2>Contacts</h2>

        <Filter filter={filters} inputFilter={inputFilter} Сlean={Сlean} />

        <ContactList
          filterContacts={filterContacts}
        />
      </Box>
    </>
  );
};

export default App;

// App.propTypes = {
//   auditEntry: PropTypes.func,
//   contacts: PropTypes.arrayOf(PropTypes.object),
//   filter: PropTypes.string,
//   filterContacts: PropTypes.func,
//   handleDelete: PropTypes.func,
//   inputFilter: PropTypes.func,
//   updateEvent: PropTypes.func,
//   Сlean: PropTypes.func,
// };
