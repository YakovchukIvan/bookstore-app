import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaStar } from 'react-icons/fa6';

// import books from '../../data/books';

import FilterBookStore from './FilterBookStore';
import { selectBooks } from '../../redux//slices/bookSlices';
import {
  selectAuthorFilter,
  selectGenreFilter,
  selectSortingFilter,
  selectTitleFilter,
} from '../../redux/slices/filterSlices';
import ComboBox from '../../components/sorting/SortSelect';

import styles from './MainBook.module.scss';
import { sortBooks } from '../../utils/sortProduct';
import PaginationBooks from '../../components/pagination/PaginationBooks';
import {
  setPaginationBooks,
  selectPaginationBooks,
  selectPaginationPage,
  selectBookPerPage,
} from '../../redux/slices/paginationSlices';

function BookStore() {
  const booksData = useSelector(selectBooks);
  // const booksData = useSelector(selectPaginationBooks);
  const page = useSelector(selectPaginationPage);
  const bookPages = useSelector(selectBookPerPage);

  const [books, setBooks] = useState([]);

  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const genreFilter = useSelector(selectGenreFilter);
  const sortingFilter = useSelector(selectSortingFilter);

  // const booksSorting = sortBooks(books, sortingFilter);

  // const filterBooks = booksSorting.filter((book) => {
  //   const matchesTitle = book.title
  //     .toLowerCase()
  //     .includes(titleFilter.toLowerCase());

  //   const matchesAuthor = book.author
  //     .toLowerCase()
  //     .includes(authorFilter.toLowerCase());

  //   const matchesGenre =
  //     genreFilter.length === 0 || genreFilter.includes(book.genre);

  //   return matchesTitle && matchesAuthor && matchesGenre;
  // });

  return (
    <div className={styles.wrapperBook}>
      <FilterBookStore />

      <div>
        <div className={styles.titleBookStore}>
          <div className={styles.amountBook}>
            <span>
              Всього книг: <strong>{booksData.length}</strong>
            </span>
          </div>

          <div>
            <PaginationBooks />
          </div>

          <div className={styles.sorting}>
            <ComboBox />
          </div>
        </div>

        <div className={styles.bookMain}>
          {books.map((book) => (
            <div className={styles.blockListBook} key={book.idBook}>
              <Link to={book.slug} className={styles.bookLink}>
                <img src={book.imgSrc[0] || book.imgSrc} alt="img" />
                {/* <img src="/img/harryPotter/1.jpg" alt="" /> */}
                {/* <img src="/img/book/4.jpg" alt="" /> */}
              </Link>
              <div className={styles.cardBookInfo}>
                <div>
                  <FaStar />
                  {book.rating}
                </div>
                <span>{book.dateOfEntry}</span>
              </div>

              <Link to={book.slug} className={styles.bookLink}>
                <span>{book.title}</span>
                <span>{book.author}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookStore;
