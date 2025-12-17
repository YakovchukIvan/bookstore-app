import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

const Home = () => (
  <div className={styles.home}>
    <h1>Ласкаво просимо до мого каталогу книг!</h1>

    <p>
      Цей проект містить базу даних різних книг різних жанрів. Ви можете переглядати книги, шукати
      за жанрами або авторами та дізнаватися більше про свої улюблені твори!
    </p>

    <Link to="/books">Переглянути каталог книг</Link>

    <div className="flex justify-center">
      <div className="w-[980px]">
        <img src="/img/home-page/book-img.png" alt="book-img" />
      </div>
    </div>
  </div>
);

export default Home;
