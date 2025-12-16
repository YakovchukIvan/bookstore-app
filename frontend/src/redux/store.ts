import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import { fetchBook, RootState, bookSlices, filterSlices, paginationSlices } from './slices';
import { URL_BOOKS } from '@/api/bookApi';

const store = configureStore({
  reducer: {
    bookStore: bookSlices,
    filter: filterSlices,
    pagination: paginationSlices,
  },
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

store.dispatch(fetchBook(URL_BOOKS));
