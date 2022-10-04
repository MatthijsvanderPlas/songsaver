import { useSelector, useDispatch } from 'react-redux';
import Checkbox from './Checkbox';
import { addsort } from '../app/store/Feature/Sort/SortSlice';
import { addfilter, removefilter } from '../app/store/Feature/Filter/FilterSlice';

export default function Filters() {
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

  const sortSongs = (event) => {
    event.persist();
    const [column, direction] = event.target.value.split(' ');
    dispatch(addsort({ column: column, direction: direction }));
  };

  return (
    <div
      style={{ maxWidth: '60rem', margin: '0 auto', marginTop: '3rem' }}
      className="columns is-centered box"
    >
      <form style={{ margin: '0 auto' }} className="tile is-ancestor is-vertical is-10">
        <div className="tile is-parent is-12">
          <div className="tile is-child is-3">Filter on genre:</div>
          <Checkbox name="Rock" addNewFilter={addNewFilter} />
          <Checkbox name="Jazz" addNewFilter={addNewFilter} />
          <Checkbox name="Pop" addNewFilter={addNewFilter} />
          <Checkbox name="Classic" addNewFilter={addNewFilter} />
        </div>
        <div className="tile columns is-parent is-12 is-vcentered">
          <label className="tile label is-child is-3">Asc/Desc Column</label>
          <div className="select is-normal is-5">
            <select onChange={sortSongs} defaultValue="default">
              <option value="default" disabled hidden>
                Choose one
              </option>
              <option value="song ascending">Song A-&gt;Z</option>
              <option value="song descending">Song Z-&gt;A</option>
              <option value="artist ascending">Artist A-&gt;Z</option>
              <option value="artist descending">Artist Z-&gt;A</option>
              <option value="stars ascending">Stars 1-&gt;5</option>
              <option value="stars descending">Stars 5-&gt;1</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}
