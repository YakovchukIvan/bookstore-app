import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  author: '',
  genre: [],
  sorting: 'по популярності',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      return { ...state, title: action.payload };
    },
    setAuthorFilter: (state, action) => {
      return { ...state, author: action.payload };
    },
    setGenreFilter: (state, action) => {
      return {
        ...state,
        genre: [...state.genre, action.payload], // Додаємо нове значення до масиву
      };
    },
    setDeleteGenreFilter: (state, action) => {
      return {
        ...state,
        genre: state.genre.filter((genr) => genr !== action.payload),
      };
    },
    setSortingFilter: (state, action) => {
      return { ...state, sorting: action.payload };
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

export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectGenreFilter = (state) => state.filter.genre;
export const selectSortingFilter = (state) => state.filter.sorting;

export default filterSlice.reducer;
