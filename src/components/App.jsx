// import PropTypes from 'prop-types';
import { Box } from 'components/Box';
// import { useState, useEffect } from 'react';
import { ContactForm } from './Phonebook/ContactForm/ContactForm';
import { Filter } from './Phonebook/Filter/Filter';
import { ContactList } from './Phonebook/ContactList/ContactList';




const App = () => {
  // const [filters, setFilter] = useState('');

  
  // add contact //

    
  

  // // filter //

  // const filterContacts = () => {
  //   const arrFil = contacts.filter(cont =>
  //     cont.name.toLowerCase().includes(filters.toLowerCase())
  //   );

  //   return arrFil;
  // };

  // const inputFilter = evt => {
  //   const input = evt.currentTarget.value.trim();
  //   setFilter(filter => (filter = input));
  // };

  // const Сlean = () => {
  //   setFilter(filters => (filters = ''));
  // };

  return (
    <>
      <ContactForm />

      <Box p={4} m={3} display="grid" border="1px solid" width="320px">
        {/* <h2>Contacts</h2> */}

        <Filter/>

        <ContactList />
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
