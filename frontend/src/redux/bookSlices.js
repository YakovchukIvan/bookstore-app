import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  isLoading: false,
};

export const fetchBook = createAsyncThunk(
  'bookStore/fetchBook',
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      // console.log('res:', res);
      return res.data;
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
