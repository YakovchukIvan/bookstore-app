import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FaRegCircleXmark } from 'react-icons/fa6';

import {
  selectAuthorFilter,
  selectTitleFilter,
  setTitleFilter,
  setAuthorFilter,
  resetFilters,
  setGenreFilter,
  setDeleteGenreFilter,
  selectGenreFilter,
} from '../../redux/slices/filterSlices';
import { selectBooks } from '../../redux/slices/bookSlices';

import styles from './MainBook.module.scss';
import { Book } from '@/types/types';

interface GenreItem {
  genre: string;
  genreUA: string;
}

interface GenreMap {
  [key: string]: {
    genre: string;
    genreUA: string;
    books: Book[];
  };
}

const genreBooks = (books: Book[]): GenreItem[] => {
  const genreMap: GenreMap = {};

  books.forEach((book) => {
    const { genre, genreUA } = book;
    if (!genreMap[genre]) {
      genreMap[genre] = {
        genre,
        genreUA,
        books: [book],
      };
    } else {
      genreMap[genre].books.push(book);
    }
  });

  const uniqueGenresArray = Object.values(genreMap).map((item) => ({
    genre: item.genre,
    genreUA: item.genreUA,
  }));

  return uniqueGenresArray;
};

function FilterBookStore() {
  const dispatch = useDispatch();

  const books = useSelector(selectBooks);
  const currentGenre = useSelector(selectGenreFilter);
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);

  const [selectedGenres, setSelectedGenres] = useState<string[]>(currentGenre);

  const handleTitleFilterChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleAuthorFilterChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setAuthorFilter(e.target.value));
  };

  const handleGenreChange = (genre: string): void => {
    if (selectedGenres.includes(genre)) {
      dispatch(setDeleteGenreFilter(genre));

      const genr = selectedGenres.filter((item) => item !== genre);
      setSelectedGenres(genr);
    } else {
      setSelectedGenres([...selectedGenres, genre]);
      dispatch(setGenreFilter(genre));
    }
  };

  const handleResetFilters = (): void => {
    dispatch(resetFilters());
    setSelectedGenres([]);
  };

  const genresBooks = genreBooks(books);

  return (
    <div className={styles.filterBook}>
      <button className={styles.resetBtn} type="button" onClick={handleResetFilters}>
        <FaRegCircleXmark title="Очистка фільтру" />
      </button>

      <h2>Фільтр</h2>

      <div className={styles.searchTitle}>
        <label htmlFor="title">Пошук по назві: </label>
        <input type="text" id="title" value={titleFilter} onChange={handleTitleFilterChange} />
      </div>

      <div className={styles.searchAuthor}>
        <label htmlFor="author">Пошук по автору: </label>
        <input type="text" id="author" value={authorFilter} onChange={handleAuthorFilterChange} />
      </div>

      <div className={styles.searchGenre}>
        <p>Пошук по жанру: </p>
        {genresBooks.map(({ genre, genreUA }, index) => (
          <div key={`${genreUA}-${index}`}>
            <label htmlFor={`checkbox-${genre}`} className={`checkbox-${genre}`}>
              <input
                id={`checkbox-${genre}`}
                type="checkbox"
                checked={selectedGenres.includes(genre)}
                onChange={() => handleGenreChange(genre)}
              />
              <span>{genreUA}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterBookStore;
