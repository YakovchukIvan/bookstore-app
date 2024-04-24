import styles from './MainBook.module.scss';

function FilterBookStore() {
  return (
    <div className={styles.filterBook}>
      <h2>Фільтр</h2>
      <div className={styles.searchTitle}>
        <label htmlFor="title">Пошук по назві: </label>
        <input type="text" id="title" />
      </div>

      <div className={styles.searchAuthor}>
        <label htmlFor="author">Пошук по автору: </label>
        <input type="text" id="author" />
      </div>

      <div className={styles.searchGenre}>
        <p>Пошук по жанру: </p>
        <div>
          <label htmlFor="checkbox-fantasy" className="checkbox-fantasy">
            <input id="checkbox-fantasy" type="checkbox" />
            <span>Фентезі</span>
          </label>
        </div>
        <div>
          <label htmlFor="checkbox-documental" className="checkbox-documental">
            <input id="checkbox-documental" type="checkbox" />
            <span>Документальні</span>
          </label>
        </div>
        <div>
          <label
            htmlFor="checkbox-science-fiction"
            className="checkbox-science-fiction"
          >
            <input id="checkbox-science-fiction" type="checkbox" />
            <span>Наукова фантастика</span>
          </label>
        </div>
      </div>

      <div className={styles.searchGenre}></div>
    </div>
  );
}

export default FilterBookStore;
