import { PropTypes } from 'prop-types';

const Song = ({ song, idx, removeSong }) => {
  return (
    <tr>
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
};

export default Song;

Song.propTypes = {
  song: PropTypes.object,
  idx: PropTypes.number,
  removeSong: PropTypes.func
};
