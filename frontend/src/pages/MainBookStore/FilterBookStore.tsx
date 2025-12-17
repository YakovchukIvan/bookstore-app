import { useState, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaRegCircleXmark } from 'react-icons/fa6';

import {
  selectAuthorFilter,
  selectTitleFilter,
  selectGenreFilter,
} from '@/redux/slices/filterSlices';
import { selectBooks } from '@/redux/slices/bookSlices';
import { extractUniqueGenres } from '@/utils/genreUtils';
import { useFilterHandlers } from '@/hooks/useFilterHandlers';

import styles from './MainBook.module.scss';
import { FilterInput } from '@/components/filter/FilterInput';
import { GenreCheckbox } from '@/components/filter/GenreCheckbox';

const FilterBookStore = () => {
  const books = useSelector(selectBooks);
  const currentGenre = useSelector(selectGenreFilter);
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);

  const [selectedGenres, setSelectedGenres] = useState<string[]>(currentGenre);

  useEffect(() => {
    setSelectedGenres(currentGenre);
  }, [currentGenre]);

  const uniqueGenres = useMemo(() => extractUniqueGenres(books), [books]);

  const { handleTitleChange, handleAuthorChange, handleGenreToggle, handleReset } =
    useFilterHandlers({
      selectedGenres,
      setSelectedGenres,
    });

  return (
    <div className={styles.filterBook}>
      <button
        className={styles.resetBtn}
        type="button"
        onClick={handleReset}
        aria-label="Очистити всі фільтри"
      >
        <FaRegCircleXmark title="Очистка фільтру" />
      </button>

      <h2>Фільтр</h2>

      <div className={styles.searchTitle}>
        <FilterInput
          id="title"
          label="Пошук по назві:"
          value={titleFilter}
          onChange={handleTitleChange}
          placeholder="Введіть назву книги"
        />
      </div>

      <div className={styles.searchAuthor}>
        <FilterInput
          id="author"
          label="Пошук по автору:"
          value={authorFilter}
          onChange={handleAuthorChange}
          placeholder="Введіть ім'я автора"
        />
      </div>

      <div className={styles.searchGenre}>
        <p>Пошук по жанру:</p>
        {uniqueGenres.map(({ genre, genreUA }) => (
          <GenreCheckbox
            key={genre}
            genre={genre}
            genreUA={genreUA}
            isChecked={selectedGenres.includes(genre)}
            onChange={handleGenreToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterBookStore;
