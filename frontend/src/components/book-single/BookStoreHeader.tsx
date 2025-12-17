import PaginationBooks from '@/components/pagination/PaginationBooks';
import CustomizedSelects from '@/components/sorting/SortSelect';
import styles from './BookSingle.module.scss';

interface BookStoreHeaderProps {
  booksQty: number;
  page: number;
  pageQty: number;
  setPage: (page: number) => void;
}

export const BookStoreHeader = ({
  booksQty,
  page,
  pageQty,
  setPage,
}: BookStoreHeaderProps): JSX.Element => (
  <div className={styles.titleBookStore}>
    <div className={styles.amountBook}>
      <span>
        Всього книг: <strong>{booksQty}</strong>
      </span>
    </div>

    <div className={styles.pagination}>
      <PaginationBooks page={page} setPage={setPage} pageQty={pageQty} />
    </div>

    <div className={styles.sorting}>
      <CustomizedSelects />
    </div>
  </div>
);
