import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { sortBooks } from '../../utils/sortProduct';
import { paginationBooks } from '../../utils/pagination';

const initialState = {
  books: [],
  booksPagination: [],
  isLoading: false,
};

export const fetchBook = createAsyncThunk(
  'bookStore/fetchBook',
  async (url) => {
    try {
      const res = await axios.get(url);

      // console.log(sortBooks(res.data, 'по назві'));
      return sortBooks(res.data, 'по популярності');
    } catch (error) {
      throw error;
    }
  }
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
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.books = action.payload;
        state.booksPagination = paginationBooks(action.payload);
        state.isLoading = false; // Оновіть isLoading на false після успішного завершення
      })
      .addCase(fetchBook.rejected, (state) => {
        state.isLoading = false; // Оновіть isLoading на false у разі помилки
      });
  },
});

export const selectBooks = (state) => state.bookStore.books;
export const selectIsLoading = (state) => state.bookStore.isLoading;

export default booksSlice.reducer;
