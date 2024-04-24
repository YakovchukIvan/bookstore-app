import { useDispatch, useSelector } from 'react-redux';
import styles from './MainBook.module.scss';
import {
  selectAuthorFilter,
  selectTitleFilter,
  setTitleFilter,
  setAuthorFilter,
  resetFilters,
} from '../../redux/slices/filterSlices';
import { selectBooks } from '../../redux/slices/bookSlices';

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

  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
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
        {genresBooks.map((genre, index) => (
          <div key={genre + index}>
            <label
              htmlFor={`checkbox-${genre.genre}`}
              className={`checkbox-${genre.genre}`}
            >
              <input id={`checkbox-${genre.genre}`} type="checkbox" />
              <span>{genre.genreUA}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterBookStore;
