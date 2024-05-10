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

const genreBooks = (books) => {
  const genreMap = {};

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

  const [selectedGenres, setSelectedGenres] = useState(currentGenre);

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };

  // Функція для додавання або видалення жанру зі списку вибраних
  const handleGenreChange = (genre) => {
    // Оновлення списку обраних жанрів
    if (selectedGenres.includes(genre)) {
      dispatch(setDeleteGenreFilter(genre));

      const genr = selectedGenres.filter((item) => item !== genre);
      setSelectedGenres(genr);
    } else {
      setSelectedGenres([...selectedGenres, genre]);
      dispatch(setGenreFilter(genre));
    }
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
    setSelectedGenres([]);
  };

  const genresBooks = genreBooks(books);

  return (
    <div className={styles.filterBook}>
      <button
        className={styles.resetBtn}
        type="button"
        onClick={handleResetFilters}
      >
        <FaRegCircleXmark title="Очистка фільтру" />
      </button>

      <h2>Фільтр</h2>

      <div className={styles.searchTitle}>
        <label htmlFor="title">Пошук по назві: </label>
        <input
          type="text"
          id="title"
          value={titleFilter}
          onChange={handleTitleFilterChange}
        />
      </div>

      <div className={styles.searchAuthor}>
        <label htmlFor="author">Пошук по автору: </label>
        <input
          type="text"
          id="author"
          value={authorFilter}
          onChange={handleAuthorFilterChange}
        />
      </div>

      <div className={styles.searchGenre}>
        <p>Пошук по жанру: </p>
        {genresBooks.map(({ genre, genreUA }, index) => (
          <div key={genreUA + index}>
            <label
              htmlFor={`checkbox-${genre}`}
              className={`checkbox-${genre}`}
            >
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
        {/* <button onClick={handleSortByGenres}>
          Сортувати за обраними жанрами
        </button> */}
      </div>
    </div>
  );
}

export default FilterBookStore;
