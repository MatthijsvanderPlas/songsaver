import { useSelector, useDispatch } from 'react-redux';
import { addsong, removesong } from './songsaverSlice';
import InputForm from '../../../../components/InputForm';
import SongList from '../../../../components/SongList';

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
    <div style={{ padding: '.5rem' }}>
      <InputForm addSong={addSongOnSubmit} />
      <SongList songs={songs} removeSong={removeSongOnClick} />
    </div>
  );
}
