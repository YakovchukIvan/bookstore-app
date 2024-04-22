import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import books from '../../data/books';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { selectBooks } from '../../redux/bookSlices';

import styles from './Book.module.scss';

function SingleBook() {
  const books = useSelector(selectBooks);
  console.log('SingleBook  books:', books);

  const params = useParams();
  const navigate = useNavigate();

  // console.log('courses:', books);
  const book = books.find((books) => {
    return books.slug === params.slug;
  });

  useEffect(() => {
    if (!book) {
      navigate('..', { relative: 'path' });
    }
  }, [book, navigate]);

  // Simply show NotFOund component
  //   if (!course) {
  //     return <NotFound />;
  //   }

  return (
    <div className={styles.cardBook}>
      <div className={styles.bookImage}>
        <img src={book.imgSrc} alt={book.title} />
      </div>
      <div className={styles.bookCaption}>
        <h2>Назва: {book.title}</h2>
        <h3>Автор: {book.author}</h3>
        <p>Жанр: {book.genre}</p>
        <p>Дата випуску: {book.year}</p>
      </div>
      {/* <Link to=".." relative="path">
        Повернутися до всіх книг
      </Link> */}
    </div>
  );
}

export default SingleBook;
