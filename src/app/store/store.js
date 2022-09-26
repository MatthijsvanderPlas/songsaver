import { configureStore } from '@reduxjs/toolkit';
import songsaverReducer from './Feature/SongSaver/songsaverSlice';

const store = configureStore({
  reducer: {
    songsaver: songsaverReducer
  }
});

export default store;
