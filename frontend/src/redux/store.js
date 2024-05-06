import { configureStore } from '@reduxjs/toolkit';

import bookSlices, { fetchBook } from './slices/bookSlices';
import filterSlices from './slices/filterSlices';
import paginationSlices from './slices/paginationSlices';

import { URL_BOOKS } from './API';

const store = configureStore({
  reducer: {
    bookStore: bookSlices,
    filter: filterSlices,
    pagination: paginationSlices,
  },
});

export default store;

// Dispatch fetchBook action при створенні магазину
store.dispatch(fetchBook(URL_BOOKS));
