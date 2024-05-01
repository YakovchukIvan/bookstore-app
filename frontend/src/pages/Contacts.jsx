import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectBooks } from '../redux/slices/bookSlices';
import { SORT_KEYS } from '../utils/name';

// const SORT_KEYS = ['по популярності', 'по назві', 'по даті'];

function Contacts() {
  const booksData = useSelector(selectBooks);
  const [books, setBooks] = useState(booksData);

  useEffect(() => {
    if (booksData && booksData.length > 0) {
      setBooks(booksData);
    }
  }, [booksData]);

  const sortBooks = (sort) => {
    console.log(sort);
    const test = [...books].sort((a, b) => b.rating - a.rating);
    console.log(test);
    setBooks(test);
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
