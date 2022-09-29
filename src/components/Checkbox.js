import { PropTypes } from 'prop-types';

export default function Checkbox({ name, addNewFilter }) {
  return (
    <div className="tile is-child is-2">
      <input className="checkbox" type="checkbox" name={name} onChange={addNewFilter} />
      <label htmlFor={name}> {name}</label>
    </div>
  );
}
Checkbox.propTypes = {
  addNewFilter: PropTypes.func,
  name: PropTypes.string
};
