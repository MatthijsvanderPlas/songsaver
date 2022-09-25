import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songs: []
};

const songsaverSlice = createSlice({
  name: 'songsaver',
  initialState,
  reducers: {
    addsong: (state, action) => {
      state.songs = [...state.songs, action.payload];
    },
    removesong: (state, action) => {
      const newState = state.songs.filter((song) => song.key !== action.payload.key);
      state.songs = [...newState];
    }
  }
});

export default songsaverSlice.reducer;
export const { addsong, removesong } = songsaverSlice.actions;
