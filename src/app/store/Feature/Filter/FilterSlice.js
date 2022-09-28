import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: []
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addfilter: (state, action) => {
      state.filters = [...state.filters, action.payload];
    },
    removefilter: (state, action) => {
      const newState = state.filters.filter((filter) => filter !== action.payload);
      state.filters = [...newState];
    }
  }
});

export default filterSlice.reducer;
export const { addfilter, removefilter } = filterSlice.actions;
