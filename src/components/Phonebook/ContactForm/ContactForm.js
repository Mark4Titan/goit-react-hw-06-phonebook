import PropTypes from 'prop-types';
import { Box } from 'components/Box';

export const ContactForm = ({ updateEvent }) => {
  return (
    <Box p={4} m={3} border="1px solid" width="320px">
      <h2>Phonebook</h2>
      <form onSubmit={updateEvent}>
        <Box display="grid">
          <Box
            as="input"
            my={2}
            type="text"
            placeholder="Name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <Box
            as="input"
            my={2}
            type="tel"
            name="number"
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <Box as="button" my={5} type="submit">
            Add contact
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  updateEvent: PropTypes.func,
};