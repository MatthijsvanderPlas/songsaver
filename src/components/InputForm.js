import { PropTypes } from 'prop-types';
import { useRef } from 'react';
import uuid from 'react-uuid';

export default function InputForm({ addSong }) {
  const songInput = useRef();
  const artistInput = useRef();
  const genreInput = useRef();
  const starInput = useRef();
  const formRef = useRef();

  const button = {
    marginTop: '32px'
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong({
      id: uuid(),
      song: songInput.current.value,
      artist: artistInput.current.value,
      genre: genreInput.current.value,
      stars: starInput.current.value
    });
    formRef.current.reset();
  };
  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <form className="tile is-ancestor is-12" onSubmit={handleSubmit} ref={formRef}>
          <div className="tile is-parent is-3">
            <div className="field">
              <label className="label" htmlFor="song">
                Title:
              </label>
              <div className="control">
                <input
                  className="tile is-child input is-one-quarter"
                  ref={songInput}
                  name="song"
                  placeholder="Song title"
                  required
                />
              </div>
            </div>
          </div>
          <div className="tile is-parent is-3">
            <div className="field">
              <label className="label" htmlFor="artist">
                Artist:
              </label>
              <div className="control">
                <input
                  className="tile is-child input is-one-quarter"
                  ref={artistInput}
                  name="artist"
                  placeholder="Artist"
                  required
                />
              </div>
            </div>
          </div>
          <div className="tile is-parent is-2">
            <div className="field">
              <label className="label" htmlFor="genre">
                Genre:
              </label>
              <div className="control">
                <div className="select is-child">
                  <select ref={genreInput} name="genre" required>
                    <option>Rock</option>
                    <option>Jazz</option>
                    <option>Pop</option>
                    <option>Beethoven</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="control tile is-parent is-2">
            <div className="field">
              <label className="label" form="stars">
                Stars:
              </label>
              <div className="control">
                <div className="select is-child">
                  <select ref={starInput} name="stars" defaultValue="Test" required>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="tile is-parent is-1">
            <div className="field">
              <div className="control">
                <button style={button} className="button is-link id-medium">
                  Add Song
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

InputForm.propTypes = {
  addSong: PropTypes.func
};
