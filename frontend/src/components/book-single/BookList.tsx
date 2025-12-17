import { Book } from '@/types/types';
import { BookCard } from './BookCard';
import styles from './BookSingle.module.scss';

interface BookListProps {
  books: Book[];
  isLoading?: boolean;
}

export const BookList = ({ books, isLoading = false }: BookListProps): JSX.Element => {
  if (isLoading || books.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.bookMain}>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};
