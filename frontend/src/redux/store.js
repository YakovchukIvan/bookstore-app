import { configureStore } from '@reduxjs/toolkit';
import bookSlices, { fetchBook } from './bookSlices';

const store = configureStore({
  reducer: {
    bookStore: bookSlices,
  },
});

export default store;

// Dispatch fetchBook action при створенні магазину
store.dispatch(fetchBook('http://localhost:4095/books'));
