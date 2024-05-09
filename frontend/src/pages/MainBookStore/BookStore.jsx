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
import { paginationBooks } from '../../utils/pagination';
import { BOOK_PER_PAGES } from '../../utils/name';

function BookStore() {
  const books = useSelector(selectBooks);
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const genreFilter = useSelector(selectGenreFilter);
  const sortingFilter = useSelector(selectSortingFilter);

  const [booksPagination, setBooksPagination] = useState([]);
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  const booksSorting = sortBooks(books, sortingFilter);

  useEffect(() => {
    const filterBooks = booksSorting.filter((book) => {
      const matchesTitle = book.title
        .toLowerCase()
        .includes(titleFilter.toLowerCase());

      const matchesAuthor = book.author
        .toLowerCase()
        .includes(authorFilter.toLowerCase());

      const matchesGenre =
        genreFilter.length === 0 || genreFilter.includes(book.genre);

      return matchesTitle && matchesAuthor && matchesGenre;
    });

    const bookPages = BOOK_PER_PAGES;
    const totalPages = Math.ceil(filterBooks.length / bookPages);
    setPageQty(totalPages);

    const pages = paginationBooks(filterBooks);

    setBooksPagination(pages[page - 1]);
  }, [books, titleFilter, authorFilter, genreFilter, sortingFilter, page]);

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

          <div>
            <PaginationBooks
              page={page}
              setPage={setPage}
              pageQty={pageQty}
              setPageQty={setPageQty}
            />
          </div>

          <div className={styles.sorting}>
            <ComboBox />
          </div>
        </div>

        <div className={styles.bookMain}>
          {booksPagination ? (
            booksPagination.map((book) => (
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
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookStore;
