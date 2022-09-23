import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import styles from './ContactList.module.css';
import { ContactListItems } from './ContactListItems';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { useSelector } from 'react-redux';



export const ContactList = ({ filterContacts}) => {
  const dispatch = useDispatch();
  const handleDelete = contact => dispatch(deleteContact(contact));

  const contacts = useSelector(state => state.contact);

  return (
    <Box as="ul" px={4}>
      {contacts.map(el => (
        <li className={styles.Li} key={el.id}>
          <ContactListItems name={el.name} number={el.number} />
          <button
            id={el.id}
            type="button"
            onClick={event => handleDelete(event.target.id)}
          >
            Delate
          </button>
        </li>
      ))}
    </Box>
  );
};

export default ContactList;

ContactList.propTypes = {
  filterContacts: PropTypes.func,
};
