import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './Feature/Filter/FilterSlice';
import songsaverReducer from './Feature/SongSaver/songsaverSlice';
import sortReducer from './Feature/Sort/SortSlice';

const store = configureStore({
  reducer: {
    songsaver: songsaverReducer,
    filters: filterReducer,
    sort: sortReducer
  }
});

export default store;
