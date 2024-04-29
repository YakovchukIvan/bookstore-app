import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  author: '',
  genre: [],
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
  resetFilters,
} = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectGenreFilter = (state) => state.filter.genre;

export default filterSlice.reducer;
