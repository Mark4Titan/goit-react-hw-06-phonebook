import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { UserBox } from 'components/Phonebook/Phonebook.style';
import { ContactListItems } from './ContactListItems';

export const ContactList = ({ filterContacts, handleDelete }) => {
  return (
    <Box as="ul" px={4}>
      {filterContacts().map(el => (
        <UserBox key={el.id}>
          <ContactListItems name={el.name} number={el.number} />
          <span>
            <button id={el.id} type="button" onClick={handleDelete}>
              Delate
            </button>
          </span>
        </UserBox>
      ))}
    </Box>
  );
};

export default ContactList;

ContactList.propTypes = {
  filterContacts: PropTypes.func,
  handleDelete: PropTypes.func,
};
