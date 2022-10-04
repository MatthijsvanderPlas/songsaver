import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Filters from './Filters';
import Song from './Song';
import styles from './songlist.module.css';

export default function SongList({ songs, removeSong }) {
  const filter = useSelector((state) => state.filters.filters);
  const sort = useSelector((state) => state.sort.sort);

  const [standard, setStandard] = useState();

  const filterFunction = (array) => {
    return array.filter((song) => filter.includes(song.genre));
  };

  const sortFunction = (obj, array) => {
    if (obj.direction === 'ascending') {
      return array.slice().sort((a, b) => (a[sort.column] > b[sort.column] ? 1 : -1));
    }
    if (obj.direction === 'descending') {
      return array.slice().sort((a, b) => (a[sort.column] < b[sort.column] ? 1 : -1));
    }
  };

  useEffect(() => {
    let derivedSongs = songs;

    if (sort && filter.length > 0) {
      derivedSongs = sortFunction(sort, filterFunction(songs));
    } else if (filter.length > 0) {
      derivedSongs = filterFunction(songs);
    } else if (sort) {
      derivedSongs = sortFunction(sort, songs);
    }

    setStandard(
      derivedSongs.map((song, idx) => {
        return <Song key={song.id} song={song} idx={idx} removeSong={removeSong} />;
      })
    );
  }, [sort, filter, songs]);

  return (
    <>
      <Filters />
      <div className={`columns is-centered box ${styles.module__box}`}>
        {songs.length > 0 ? (
          <table className="table is-striped is-fullwidth is-hoverable">
            <thead>
              <tr>
                <th>Nr:</th>
                <th>Song:</th>
                <th>Artist:</th>
                <th>Genre:</th>
                <th>Stars:</th>
              </tr>
            </thead>
            <tbody>{standard}</tbody>
          </table>
        ) : (
          <div className="content">
            <h3>Add a song</h3>
          </div>
        )}
      </div>
    </>
  );
}

SongList.propTypes = {
  songs: PropTypes.array,
  removeSong: PropTypes.func
};
