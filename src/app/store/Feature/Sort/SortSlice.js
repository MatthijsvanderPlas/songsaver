import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sort: { column: 'song', direction: 'descending' }
};

const SortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    addsort: (state, action) => {
      state.sort = { ...action.payload };
    }
  }
});

export default SortSlice.reducer;
export const { addsort } = SortSlice.actions;
