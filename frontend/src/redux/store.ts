import { configureStore } from '@reduxjs/toolkit';

import { URL_BOOKS } from '../api/constants';

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
