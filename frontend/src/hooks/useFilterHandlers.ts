import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  setTitleFilter,
  setAuthorFilter,
  setGenreFilter,
  setDeleteGenreFilter,
  resetFilters,
} from '@/redux/slices/filterSlices';
import { AppDispatch } from '@/redux/store';

interface UseFilterHandlersProps {
  selectedGenres: string[];
  setSelectedGenres: React.Dispatch<React.SetStateAction<string[]>>;
}

const removeGenre = (
  genre: string,
  dispatch: ReturnType<typeof useDispatch<AppDispatch>>,
  setSelectedGenres: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  dispatch(setDeleteGenreFilter(genre));
  setSelectedGenres((prev) => prev.filter((item) => item !== genre));
};

const addGenre = (
  genre: string,
  dispatch: ReturnType<typeof useDispatch<AppDispatch>>,
  setSelectedGenres: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  dispatch(setGenreFilter(genre));
  setSelectedGenres((prev) => [...prev, genre]);
};

export const useFilterHandlers = ({
  selectedGenres,
  setSelectedGenres,
}: UseFilterHandlersProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      dispatch(setTitleFilter(e.target.value));
    },
    [dispatch],
  );

  const handleAuthorChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      dispatch(setAuthorFilter(e.target.value));
    },
    [dispatch],
  );

  const handleGenreToggle = useCallback(
    (genre: string): void => {
      const isSelected = selectedGenres.includes(genre);

      if (isSelected) {
        removeGenre(genre, dispatch, setSelectedGenres);
      } else {
        addGenre(genre, dispatch, setSelectedGenres);
      }
    },
    [selectedGenres, dispatch, setSelectedGenres],
  );

  const handleReset = useCallback((): void => {
    dispatch(resetFilters());
    setSelectedGenres([]);
  }, [dispatch, setSelectedGenres]);

  return {
    handleTitleChange,
    handleAuthorChange,
    handleGenreToggle,
    handleReset,
  };
};
