import { configureStore } from '@reduxjs/toolkit';
import bookSlices, { fetchBook } from './bookSlices';
import { URL_BOOKS } from './API';

const store = configureStore({
  reducer: {
    bookStore: bookSlices,
  },
});

export default store;

// Dispatch fetchBook action при створенні магазину
store.dispatch(fetchBook(URL_BOOKS));
