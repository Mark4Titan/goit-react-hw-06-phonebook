import { Box } from 'components/Box';
import styles from './ContactList.module.css';
import { ContactListItems } from './ContactListItems';
import { deleteContact } from 'redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';



export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contact);
  const filter = useSelector(state => state.filters.status);

  const contactSearch = filter === '' ? contacts :
    contacts.filter(cont => cont.name.toLowerCase().includes(filter.toLowerCase()));  


  const handleDelete = contact => dispatch(deleteContact(contact));

  return (
    <Box as="ul" px={1}>
      {contactSearch.map(el => (
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

