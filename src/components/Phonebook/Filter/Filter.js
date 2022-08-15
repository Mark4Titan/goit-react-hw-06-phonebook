import PropTypes from 'prop-types';
import { Box } from 'components/Box';

export const Filter = ({ filter, inputFilter, Сlean }) => {
  return (
    <>
      <input
        type="filter"
        placeholder="Find contacts by name"
        value={filter}
        onChange={inputFilter}
      />
      {filter && (
        <Box as="button" my={2} type="button" onClick={Сlean}>
          Сlean up
        </Box>
      )}
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  inputFilter: PropTypes.func,
  Сlean: PropTypes.func,
};
