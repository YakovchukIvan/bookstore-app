import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa6';
import { Book } from '@/types/types';
import styles from './BookSingle.module.scss';

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps): JSX.Element => {
  const imgSrc = Array.isArray(book.imgSrc) ? book.imgSrc[0] : book.imgSrc;

  return (
    <div className={styles.blockListBook}>
      <Link to={book.id} className={styles.bookLink}>
        <img src={imgSrc} alt={book.title} />
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
  );
};
