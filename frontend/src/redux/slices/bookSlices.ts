import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { sortBooks } from '../../utils/sortProduct';
import { paginationBooks } from '../../utils/pagination';
import { Book, BooksState, RootState } from '@/types/types';

const initialState: BooksState = {
  books: [],
  booksPagination: [],
  isLoading: false,
};

export const fetchBook = createAsyncThunk<Book[], string>(
  'bookStore/fetchBook',
  async (url: string) => {
    try {
      const res = await axios.get<Book[]>(url);
      return sortBooks(res.data, 'по популярності');
    } catch (error) {
      throw error;
    }
  },
);

const booksSlice = createSlice({
  name: 'bookStore',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBook.fulfilled, (state, action: PayloadAction<Book[]>) => {
        state.books = action.payload;
        state.booksPagination = paginationBooks(action.payload);
        state.isLoading = false;
      })
      .addCase(fetchBook.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const selectBooks = (state: RootState): Book[] => state.bookStore.books;
export const selectBooksPagination = (state: RootState): Book[][] =>
  state.bookStore.booksPagination;
export const selectIsLoading = (state: RootState): boolean => state.bookStore.isLoading;

export default booksSlice.reducer;
