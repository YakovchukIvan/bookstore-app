import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectAuthorFilter,
  selectTitleFilter,
  setTitleFilter,
  setAuthorFilter,
  resetFilters,
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
  const books = useSelector(selectBooks);
  // const [filteredBooks, setFilteredBooks] = useState(books);
  const [selectedGenres, setSelectedGenres] = useState([]);
  console.log('main', selectedGenres);

  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };

  // Функція для додавання або видалення жанру зі списку вибраних
  const handleGenreChange = (genre) => {
    console.log(genre);
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((item) => item !== genre));
      useDispatch(selectGenreFilter(selectedGenres));
      console.log('1', selectedGenres);
    } else {
      setSelectedGenres([...selectedGenres, genre]);
      console.log('2', selectedGenres);
      useDispatch(selectGenreFilter(selectedGenres));
    }
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  const genresBooks = genreBooks(books);

  return (
    <div className={styles.filterBook}>
      <button
        className={styles.resetBtn}
        type="button"
        onClick={handleResetFilters}
      >
        Очистити фільтр
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
