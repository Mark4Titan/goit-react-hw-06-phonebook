import { Box } from 'components/Box';
import { ContactForm } from './Phonebook/ContactForm/ContactForm';
import { Filter } from './Phonebook/Filter/Filter';
import { ContactList } from './Phonebook/ContactList/ContactList';


const App = () => {   

  return (
    <>
      <ContactForm />
      <Box p={4} m={3} display="grid" border="1px solid" width="320px">
        <Filter />
        <ContactList/>
      </Box>
    </>
  );
};

export default App;

