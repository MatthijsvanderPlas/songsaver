import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import Filters from '../app/store/Feature/Filter/Filters';

export default function SongList({ songs, removeSong }) {
  const filter = useSelector((state) => state.filters.filters);
  const sort = useSelector((state) => state.sort.sort);
  let filteredSongs;
  let sortedSongs;
  let derivedSongs = songs;

  if (filter.length > 0) {
    filteredSongs = songs.filter((song) => filter.includes(song.genre));
  }

  if (sort && songs.length > 0) {
    let localSongsList = songs;
    if (filteredSongs) localSongsList = filteredSongs;

    if (sort.direction === 'ascending') {
      sortedSongs = localSongsList
        .slice()
        .sort((a, b) => (a[sort.column] > b[sort.column] ? 1 : -1));
    }
    if (sort.direction === 'descending') {
      sortedSongs = localSongsList
        .slice()
        .sort((a, b) => (a[sort.column] < b[sort.column] ? 1 : -1));
    }
  }

  if (filteredSongs) {
    derivedSongs = filteredSongs;
  }
  if (sortedSongs) {
    derivedSongs = sortedSongs;
  }

  const standard = derivedSongs.map((song, idx) => {
    return (
      <tr key={song.id}>
        <th>{idx + 1}</th>
        <td>{song.song}</td>
        <td>{song.artist}</td>
        <td>{song.genre}</td>
        <td>{song.stars}</td>
        <td>
          <button className="delete" onClick={() => removeSong(song.id)}></button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <Filters />
      <div
        style={{ maxWidth: '60rem', margin: '0 auto', marginTop: '3rem' }}
        className="columns is-centered box"
      >
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
