import { FilterState, RootState } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: FilterState = {
  title: '',
  author: '',
  genre: [],
  sorting: 'по популярності',
  pagePagination: 1,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
      state.pagePagination = 1; // Скидаємо на першу сторінку
    },
    setAuthorFilter: (state, action: PayloadAction<string>) => {
      state.author = action.payload;
      state.pagePagination = 1;
    },
    setGenreFilter: (state, action: PayloadAction<string>) => {
      state.genre.push(action.payload);
      state.pagePagination = 1;
    },
    setDeleteGenreFilter: (state, action: PayloadAction<string>) => {
      state.genre = state.genre.filter((genr) => genr !== action.payload);
    },
    setSortingFilter: (state, action: PayloadAction<string>) => {
      state.sorting = action.payload;
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const {
  setTitleFilter,
  setAuthorFilter,
  setGenreFilter,
  setDeleteGenreFilter,
  setSortingFilter,
  resetFilters,
} = filterSlice.actions;

export const selectTitleFilter = (state: RootState): string => state.filter.title;
export const selectAuthorFilter = (state: RootState): string => state.filter.author;
export const selectGenreFilter = (state: RootState): string[] => state.filter.genre;
export const selectSortingFilter = (state: RootState): string => state.filter.sorting;
export const selectPageFilter = (state: RootState): number => state.filter.pagePagination;

export default filterSlice.reducer;
