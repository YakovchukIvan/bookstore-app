import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import books from '../../data/books';

import FilterBookStore from './FilterBookStore';
import { selectBooks } from '../../redux//slices/bookSlices';
import {
  selectAuthorFilter,
  selectTitleFilter,
} from '../../redux/slices/filterSlices';
import ComboBox from '../../components/SortSelect';

import styles from './MainBook.module.scss';

function BookStore() {
  const dispatch = useDispatch();

  const books = useSelector(selectBooks);
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);

  const filterBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());

    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase());

    return matchesTitle && matchesAuthor;
  });

  return (
    <div className={styles.wrapperBook}>
      <FilterBookStore />

      <div>
        <div className={styles.titleBookStore}>
          <div className={styles.amountBook}>
            <span>
              Всього книг: <strong>{books.length}</strong>
            </span>
          </div>
          <div className={styles.sorting}>
            <ComboBox />
          </div>
        </div>

        <div className={styles.bookMain}>
          {filterBooks.map((book) => (
            <div className={styles.blockListBook} key={book.idBook}>
              <Link to={book.slug} className={styles.bookLink}>
                <img src={book.imgSrc} alt="img" />
              </Link>
              <Link to={book.slug} className={styles.bookLink}>
                <span>{book.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookStore;
