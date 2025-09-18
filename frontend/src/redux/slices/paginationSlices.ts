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
    setPaginationPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPaginationBooks, setPaginationPage } =
  paginationSlices.actions;

export const selectPaginationBooks = (state) =>
  state.pagination.booksPagination;
export const selectPaginationPage = (state) => state.pagination.page;
export const selectBookPerPage = (state) => state.pagination.bookPerPage;

export default paginationSlices.reducer;
