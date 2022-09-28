import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './Feature/Filter/FilterSlice';
import songsaverReducer from './Feature/SongSaver/songsaverSlice';

const store = configureStore({
  reducer: {
    songsaver: songsaverReducer,
    filters: filterReducer
  }
});

export default store;
