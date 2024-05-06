import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksPagination: [],
  bookPerPage: 6,
  page: 1,
  pageQty: 0,
};

const paginationSlices = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPaginationBooks: (state, action) => {
      state.booksPagination = action.payload;
    },
  },
});

export const { setPaginationBooks } = paginationSlices.actions;

export const selectPaginationBooks = (state) =>
  state.pagination.booksPagination;

export default paginationSlices.reducer;
