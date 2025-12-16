import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaStar } from 'react-icons/fa6';

import FilterBookStore from './FilterBookStore';
import { selectBooks } from '../../redux/slices/bookSlices';
import {
  selectAuthorFilter,
  selectGenreFilter,
  selectSortingFilter,
  selectTitleFilter,
} from '../../redux/slices/filterSlices';

import styles from './MainBook.module.scss';
import { sortBooks } from '../../utils/sortProduct';
import { paginationBooks } from '../../utils/pagination';
import { Book, SortKey } from '@/types/types';
import { BOOK_PER_PAGES } from '@/constants/constants';
import PaginationBooks from '@/components/pagination/PaginationBooks';
import CustomizedSelects from '@/components/sorting/SortSelect';

function BookStore() {
  const books = useSelector(selectBooks);
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const genreFilter = useSelector(selectGenreFilter);
  const sortingFilter = useSelector(selectSortingFilter);

  const [booksPagination, setBooksPagination] = useState<Book[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageQty, setPageQty] = useState<number>(0);
  const [booksQty, setBooksQty] = useState<number>(0);

  const booksSorting = sortBooks(books, sortingFilter as SortKey);

  useEffect(() => {
    const filterBooks = booksSorting.filter((book) => {
      const matchesTitle = book.title.toLowerCase().includes(titleFilter.toLowerCase());

      const matchesAuthor = book.author.toLowerCase().includes(authorFilter.toLowerCase());

      const matchesGenre = genreFilter.length === 0 || genreFilter.includes(book.genre);

      return matchesTitle && matchesAuthor && matchesGenre;
    });

    const bookPages = BOOK_PER_PAGES;
    const totalPages = Math.ceil(filterBooks.length / bookPages);
    setPageQty(totalPages);

    setBooksQty(filterBooks.length);

    const pages = paginationBooks(filterBooks);
    setBooksPagination(pages[page - 1] || []);
  }, [books, titleFilter, authorFilter, genreFilter, sortingFilter, page, booksSorting]);

  return (
    <div className={styles.wrapperBook}>
      <FilterBookStore />

      <div>
        <div className={styles.titleBookStore}>
          <div className={styles.amountBook}>
            <span>
              Всього книг: <strong>{booksQty}</strong>
            </span>
          </div>

          <div className={styles.pagination}>
            <PaginationBooks
              page={page}
              setPage={setPage}
              pageQty={pageQty}
              setPageQty={setPageQty}
            />
          </div>

          <div className={styles.sorting}>
            <CustomizedSelects />
          </div>
        </div>

        <div className={styles.bookMain}>
          {booksPagination && booksPagination.length > 0 ? (
            booksPagination.map((book) => (
              <div className={styles.blockListBook} key={book.id}>
                <Link to={book.id} className={styles.bookLink}>
                  <img
                    src={Array.isArray(book.imgSrc) ? book.imgSrc[0] : book.imgSrc}
                    alt={book.title}
                  />
                </Link>
                <div className={styles.cardBookInfo}>
                  <div>
                    <FaStar />
                    {book.rating}
                  </div>
                  <span>{book.dateOfEntry}</span>
                </div>

                <Link to={book.id} className={styles.bookLink}>
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
