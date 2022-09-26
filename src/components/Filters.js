import { PropTypes } from 'prop-types';

export default function Filters({ handleFilter }) {
  return (
    <div
      style={{ maxWidth: '60rem', margin: '0 auto', marginTop: '3rem' }}
      className="columns is-centered box"
    >
      <button
        onClick={() => {
          handleFilter(true);
        }}
      >
        AddFilter
      </button>
    </div>
  );
}

Filters.propTypes = {
  handleFilter: PropTypes.func
};
