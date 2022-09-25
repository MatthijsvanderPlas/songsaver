import { useSelector, useDispatch } from 'react-redux';
import { addsong, removesong } from './songsaverSlice';
import uuid from 'react-uuid';
import { useState } from 'react';

export default function SongSaver() {
  const [songname, setSongname] = useState('');

  const songs = useSelector((state) => state.songsaver.songs);
  const dispatch = useDispatch();

  const songEl = songs.map((song) => (
    <div key={song.key} id={song.key}>
      {song.name} <button onClick={() => dispatch(removesong({ key: song.key }))}>X</button>
    </div>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!songname) return;
    dispatch(addsong({ key: uuid(), name: songname }));
    setSongname(() => '');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="songname" value={songname} onChange={(e) => setSongname(e.target.value)} />
        <button>Add Song</button>
      </form>
      <div>{songEl}</div>
    </>
  );
}
