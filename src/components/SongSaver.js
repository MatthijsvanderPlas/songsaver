import { useSelector, useDispatch } from 'react-redux';
import { addsong, removesong } from '../app/store/Feature/SongSaver/songsaverSlice';
import InputForm from './InputForm';
import SongList from './SongList';

export default function SongSaver() {
  const songs = useSelector((state) => state.songsaver.songs);
  const dispatch = useDispatch();

  const removeSongOnClick = (props) => {
    dispatch(removesong({ id: props }));
  };

  const addSongOnSubmit = (props) => {
    dispatch(addsong(props));
  };

  return (
    <div>
      <InputForm addSong={addSongOnSubmit} />
      <SongList songs={songs} removeSong={removeSongOnClick} />
    </div>
  );
}
