import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectBooks } from '../redux/slices/bookSlices';
import { SORT_KEYS } from '../utils/name';

// const SORT_KEYS = ['по популярності', 'по назві', 'по даті'] ;

function Contacts() {
  const booksData = useSelector(selectBooks);
  const [books, setBooks] = useState(booksData);

  useEffect(() => {
    if (booksData && booksData.length > 0) {
      setBooks(booksData);
    }
  }, [booksData]);

  const sortBooks = (sort) => {
    let sortedBooks = [...books]; // Клонуємо масив книг для безпечного сортування

    switch (sort) {
      case SORT_KEYS[0]:
        sortedBooks.sort((a, b) => b.rating - a.rating);
        break;
      case SORT_KEYS[1]:
        const collator = new Intl.Collator('uk-UA', { sensitivity: 'base' });
        sortedBooks.sort((a, b) => collator.compare(a.title, b.title));
        break;
      case SORT_KEYS[2]:
        sortedBooks.sort(
          (a, b) => new Date(a.dateOfEntry) - new Date(b.dateOfEntry)
        );
        break;
      default:
        // Якщо передано невірне значення для сортування, залишити незмінним
        break;
    }

    // Оновлення стану з відсортованим масивом книг
    setBooks(sortedBooks);
  };

  return (
    <div>
      {/* Чекбокси для вибору жанрів */}
      <div className="pagesSort">
        {SORT_KEYS.map((sort) => (
          <button onClick={() => sortBooks(sort)} key={sort}>
            {sort}
          </button>
        ))}
      </div>

      {/* Виведення відфільтрованих книг */}
      <div className="bookGenre">
        {books.map((book) => (
          <div key={book.idBook}>
            <p>
              <strong>{book.title}</strong>
            </p>
            <p>
              Rating <strong> {book.rating}</strong>
            </p>
            <p>{book.dateOfEntry}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contacts;
