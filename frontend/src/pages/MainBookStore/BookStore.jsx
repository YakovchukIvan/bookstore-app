import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import books from '../../data/books';

import styles from './MainBook.module.scss';
import FilterBookStore from './FilterBookStore';
import { selectBooks } from '../../redux/bookSlices';

function BookStore() {
  const books = useSelector(selectBooks);

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
            <span>Сортування</span>
          </div>
        </div>

        <div className={styles.bookMain}>
          {books.map((book) => (
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
