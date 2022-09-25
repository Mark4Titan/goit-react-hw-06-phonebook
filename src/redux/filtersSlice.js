import { createSlice } from '@reduxjs/toolkit';


const filtersSlice = createSlice({
  name: 'filters',
  initialState: { status: '' },
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
    clearFilter(state) { 
      state.status = ''
    }
  },
});

export const { setStatusFilter, clearFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
