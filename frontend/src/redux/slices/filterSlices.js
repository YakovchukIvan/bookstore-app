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
      console.log(state);
      console.log(action);
      return { ...state };
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const { setTitleFilter, setAuthorFilter, setGenreFilter, resetFilters } =
  filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectGenreFilter = (state) => state.filter.genre;

export default filterSlice.reducer;
