import { PropTypes } from 'prop-types';

export default function SongList({ songs, removeSong }) {
  console.log(songs);

  const standard = songs.map((song, idx) => {
    return (
      <tr key={song.id}>
        <th>{idx + 1}</th>
        <td>{song.song}</td>
        <td>{song.artist}</td>
        <td>{song.genre}</td> <td>{song.stars}</td>
        <td>
          <button className="delete" onClick={() => removeSong(song.id)}></button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div
        style={{ maxWidth: '60rem', margin: '0 auto', marginTop: '3rem' }}
        className="columns is-centered"
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
