import { Book, PaginationState, RootState } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: PaginationState = {
  booksPagination: [],
  bookPerPage: 6,
  page: 1,
  pageQty: 0,
};

const paginationSlices = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPaginationBooks: (state, action: PayloadAction<Book[]>) => {
      state.booksPagination = action.payload;
    },
    setPaginationPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setPaginationBooks, setPaginationPage } = paginationSlices.actions;

export const selectPaginationBooks = (state: RootState): Book[] => state.pagination.booksPagination;
export const selectPaginationPage = (state: RootState): number => state.pagination.page;
export const selectBookPerPage = (state: RootState): number => state.pagination.bookPerPage;

export default paginationSlices.reducer;
