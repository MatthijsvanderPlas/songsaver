import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Filters from './Filters';
import Song from './Song';
import styles from './songlist.module.css';

export default function SongList({ songs, removeSong }) {
  const filter = useSelector((state) => state.filters.filters);
  const sort = useSelector((state) => state.sort.sort);

  const [standard, setStandard] = useState(
    songs.map((song, idx) => {
      return <Song key={song.id} song={song} idx={idx} removeSong={removeSong} />;
    })
  );

  useEffect(() => {
    if (filter.length > 0) {
      const filteredSongs = songs.filter((song) => filter.includes(song.genre));
      setStandard(
        filteredSongs.map((song, idx) => {
          return <Song key={song.id} song={song} idx={idx} removeSong={removeSong} />;
        })
      );
    } else {
      setStandard(
        songs.map((song, idx) => {
          return <Song key={song.id} song={song} idx={idx} removeSong={removeSong} />;
        })
      );
    }
  }, [filter]);

  useEffect(() => {
    let sortedSongs = [];
    if (sort.direction === 'ascending') {
      sortedSongs = songs.slice().sort((a, b) => (a[sort.column] > b[sort.column] ? 1 : -1));
    }
    if (sort.direction === 'descending') {
      sortedSongs = songs.slice().sort((a, b) => (a[sort.column] < b[sort.column] ? 1 : -1));
    }
    setStandard(
      sortedSongs.map((song, idx) => {
        return <Song key={song.id} song={song} idx={idx} removeSong={removeSong} />;
      })
    );
  }, [sort]);

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
