import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import styles from './Book.module.scss';
import { URL_BOOKS } from '../../redux/API';

function SingleBook() {
  const params = useParams();
  const [book, setBook] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async (slug) => {
      try {
        const res = await axios.get(URL_BOOKS + `/${slug}`);
        // console.log(res);
        setBook(res.data);
        setIsLoading(false);
        return res.data;
      } catch (error) {
        throw error;
      }
    };
    fetchBook(params.slug);
  }, []);

  return (
    <div className={styles.bookPages}>
      <div className={styles.backToBookStore}>
        <Link to=".." relative="path">
          Повернутися до всіх книг
        </Link>
      </div>

      {isLoading ? (
        <p>Очікуємо завантаження</p>
      ) : (
        <div className={styles.cardBook}>
          <div className={styles.cardTitle}>
            <h2>Назва: {book.title}</h2>
            <h3>Автор: {book.author}</h3>
          </div>

          <div className={styles.cardCaption}>
            <div className={styles.bookImage}>
              <img src={book.imgSrc} alt={book.title} />
            </div>

            <div className={styles.bookCaption}>
              <div className={styles.caption}>
                <p>
                  <i>Опис</i>
                </p>
                <p>{book.caption}</p>
              </div>
              <hr className={styles.hr} />

              <div className={styles.genre}>
                <p>
                  <i>Жанр</i>
                </p>
                <p>{book.genre}</p>
              </div>
              <hr className={styles.hr} />

              <div className={styles.year}>
                <p>
                  <i>Дата випуску</i>
                </p>
                <p> {book.year} рік</p>
              </div>
              <hr className={styles.hr} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleBook;
