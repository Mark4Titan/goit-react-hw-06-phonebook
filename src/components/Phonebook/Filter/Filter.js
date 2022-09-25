import { Box } from 'components/Box';
import { setStatusFilter, clearFilter } from 'redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  const Сlean = () => dispatch(clearFilter());

  const filter = useSelector(state => state.filters.status);

  const ContactsFilter = contact => dispatch(setStatusFilter(contact));

  return (
    <>
      <h2>Contacts</h2>
      <input
        type="filter"
        placeholder="Find contacts by name"
        value={filter}
        onChange={evt => ContactsFilter(evt.currentTarget.value.trim())}
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
