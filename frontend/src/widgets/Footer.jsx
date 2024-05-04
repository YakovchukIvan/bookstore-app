import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.caption}>
        <ul>
          <li>BOOK STORE APP</li>
          <li>Політика конфіденційності</li>
          <li>Питання та відповіді</li>
        </ul>

        <div className={styles.logoFooter}>
          <img
            width={75}
            src="https://www.svgrepo.com/show/513273/book-opened.svg"
            alt=""
          />
          <p>ТВОЯ БІБЛІОТЕКА</p>
        </div>
      </div>

      <div className={styles.protect}>
        <p>© 2024 Book Store App. Всі права захищено</p>
      </div>
    </footer>
  );
}

export default Footer;
