import { configureStore } from '@reduxjs/toolkit';
import songsaverReducer from './songsaverSlice';

const store = configureStore({
  reducer: {
    songsaver: songsaverReducer
  }
});

export default store;
