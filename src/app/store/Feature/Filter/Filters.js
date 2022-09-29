import { useSelector, useDispatch } from 'react-redux';
import Checkbox from '../../../../components/Checkbox';
import { addsort } from '../Sort/SortSlice';
import { addfilter, removefilter } from './FilterSlice';

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
        <div className="tile is-parent is- 12">
          <label className="tile label is-child is-4">Asc/Desc Column</label>
          <select
            style={{ width: '400px' }}
            className="select tile is-child is-6"
            onChange={sortSongs}
          >
            <option value="song ascending">Song A-&gt;Z</option>
            <option value="song descending">Song Z-&gt;A</option>
            <option value="artist ascending">Artist A-&gt;Z</option>
            <option value="artist descending">Artist Z-&gt;A</option>
            <option value="stars ascending">Stars 1-&gt;5</option>
            <option value="stars descending">Stars 5-&gt;1</option>
          </select>
        </div>
      </form>
    </div>
  );
}
