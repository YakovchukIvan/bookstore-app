import { Link } from 'react-router-dom';

import books from '../../data/courses';

import styles from './Book.module.scss';
import FilterBookStore from './FilterBookStore';

function BookStore() {
  return (
    <div className={styles.wrapperBook}>
      <FilterBookStore />

      <div>
        <p className={styles.titleBookStore}>Книгі</p>

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
