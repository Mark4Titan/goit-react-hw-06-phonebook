import PropTypes from 'prop-types';


export const ContactListItems = ({name, number}) => {
  return (
    <>
      <span>{name} : </span>
      <span>{number} </span>
    </>
  );
};

export default ContactListItems;

ContactListItems.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    handleDelete: PropTypes.func,
};