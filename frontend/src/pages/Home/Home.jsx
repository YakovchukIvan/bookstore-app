import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.home}>
      <h1>Ласкаво просимо до мого каталогу книг!</h1>

      <p>
        Цей проект містить базу даних різних книг різних жанрів. Ви можете
        переглядати книги, шукати за жанрами або авторами та дізнаватися більше
        про свої улюблені твори!
      </p>

      <Link to="/books">Переглянути каталог книг</Link>

      <div>
        <img src="/img/home-page/book-img.jpg" alt="book-img" />
      </div>
    </div>
  );
}

export default Home;
