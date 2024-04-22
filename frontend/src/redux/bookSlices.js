import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  books: [],
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
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.books = action.payload;
    });
  },
});

export const selectBooks = (state) => state.bookStore.books;

export default booksSlice.reducer;
