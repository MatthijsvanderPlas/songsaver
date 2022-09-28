import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addfilter, removefilter } from './FilterSlice';

export default function Filters({ handleFilter }) {
  const filter = useSelector((state) => state.filters.filters);
  const dispatch = useDispatch();

  const addNewFilter = (event) => {
    event.persist();
    if (filter.includes(event.target.name)) {
      dispatch(removefilter(event.target.name));
      return;
    }
    dispatch(addfilter(event.target.name));
  };

  console.log(filter);

  return (
    <div
      style={{ maxWidth: '60rem', margin: '0 auto', marginTop: '3rem' }}
      className="columns is-centered box"
    >
      <form>
        <input type="checkbox" name="Rock" onChange={addNewFilter} />
        <label htmlFor="Rock"> Rock</label>
        <input type="checkbox" name="Jazz" onChange={addNewFilter} />
        <label htmlFor="Jazz"> Jazz</label>
      </form>
    </div>
  );
}

Filters.propTypes = {
  handleFilter: PropTypes.func
};
