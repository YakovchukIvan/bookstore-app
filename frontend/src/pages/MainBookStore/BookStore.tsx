import FilterBookStore from './FilterBookStore';

import { useBookFilters } from '@/hooks/useBookFilters';
import styles from './MainBook.module.scss';
import { BookStoreHeader } from '@/components/book-single/BookStoreHeader';
import { BookList } from '@/components/book-single/BookList';

const BookStore = () => {
  const { booksPagination, page, pageQty, booksQty, setPage } = useBookFilters();

  return (
    <div className={styles.wrapperBook}>
      <FilterBookStore />

      <div>
        <BookStoreHeader booksQty={booksQty} page={page} pageQty={pageQty} setPage={setPage} />

        <BookList books={booksPagination} />
      </div>
    </div>
  );
};

export default BookStore;
