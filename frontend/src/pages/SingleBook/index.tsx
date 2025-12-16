import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import styles from './Book.module.scss';
import SwiperGalery from '@/components/swiper/Swiper';
import { BookDetails } from '@/types/types';
import { URL_BOOKS } from '@/api/bookApi';

const SingleBook = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<BookDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBook = async (id: string | undefined): Promise<void> => {
      if (!id) {
        setError('Відсутній ідентифікатор книги');
        setIsLoading(false);
        return;
      }

      try {
        const res = await axios.get<BookDetails>(`${URL_BOOKS}/${id}`);
        setBook(res.data);
        setError(null);
      } catch (err) {
        const axiosError = err as AxiosError;
        setError(
          axiosError.response?.status === 404 ? 'Книгу не знайдено' : 'Помилка завантаження даних',
        );
        console.error('Error fetching book:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBook(id);
  }, [id]);

  if (isLoading) {
    return (
      <div className={styles.bookPages}>
        <p>Очікуємо завантаження...</p>
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className={styles.bookPages}>
        <div className={styles.backToBookStore}>
          <Link to=".." relative="path">
            Повернутися до всіх книг
          </Link>
        </div>
        <p className={styles.error}>{error || 'Книгу не знайдено'}</p>
      </div>
    );
  }

  return (
    <div className={styles.bookPages}>
      <div className={styles.backToBookStore}>
        <Link to=".." relative="path">
          Повернутися до всіх книг
        </Link>
      </div>

      <div className={styles.cardBook}>
        <div className={styles.cardTitle}>
          <h2>Назва: {book.title}</h2>
          <h3>Автор: {book.author}</h3>
        </div>

        <div className={styles.cardCaption}>
          <div className={styles.bookImage}>
            <SwiperGalery book={book} />
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
              <p>{book.genreUA}</p>
            </div>
            <hr className={styles.hr} />

            <div className={styles.year}>
              <p>
                <i>Дата випуску</i>
              </p>
              <p>{book.year} рік</p>
            </div>
            <hr className={styles.hr} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
