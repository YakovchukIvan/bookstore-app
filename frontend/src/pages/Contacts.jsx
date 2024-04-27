import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectBooks } from '../redux/slices/bookSlices';

const genreBooks = (books) => {
  const genreMap = {};

  books.forEach((book) => {
    const { genre, genreUA } = book;
    if (!genreMap[genre]) {
      genreMap[genre] = {
        genre,
        genreUA,
        books: [book],
      };
    } else {
      genreMap[genre].books.push(book);
    }
  });

  const uniqueGenresArray = Object.values(genreMap).map((item) => ({
    genre: item.genre,
    genreUA: item.genreUA,
  }));

  return uniqueGenresArray;
};

function Contacts() {
  const booksData = useSelector(selectBooks);
  const [filteredBooks, setFilteredBooks] = useState(booksData);
  const [selectedGenres, setSelectedGenres] = useState([]);

  // Функція для додавання або видалення жанру зі списку вибраних
  const handleGenreChange = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((item) => item !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  // Функція для сортування книг за вибраними жанрами
  const handleSortByGenres = () => {
    if (selectedGenres.length === 0) {
      setFilteredBooks(booksData); // якщо нічого не вибрано, показати всі книги
    } else {
      const filtered = booksData.filter((book) =>
        selectedGenres.includes(book.genre)
      );
      setFilteredBooks(filtered);
    }
  };

  const genresBooks = genreBooks(booksData);
  console.log('Contacts  genresBooks:', genresBooks);

  return (
    <div>
      {/* Чекбокси для вибору жанрів */}
      <div className="pagesSort">
        {genresBooks.map(({ genre, genreUA }, index) => (
          <div className="genreCheckbox" key={genre + index}>
            <label>
              <input
                type="checkbox"
                checked={selectedGenres.includes(genre)}
                onChange={() => handleGenreChange(genre)}
              />
              {genreUA}
            </label>
          </div>
        ))}
      </div>
      {/* <label>
        Фентезі
        <input
          type="checkbox"
          checked={selectedGenres.includes('fantasy')}
          onChange={() => handleGenreChange('fantasy')}
        />
      </label>
      <label>
        Наукова фантастика
        <input
          type="checkbox"
          checked={selectedGenres.includes('science-fiction')}
          onChange={() => handleGenreChange('science-fiction')}
        />
      </label>
      <label>
        Художня література
        <input
          type="checkbox"
          checked={selectedGenres.includes('artistic-literature')}
          onChange={() => handleGenreChange('artistic-literature')}
        />
      </label> */}
      {/* Додайте інші чекбокси для інших жанрів, які вам потрібні */}

      {/* Кнопка для сортування за обраними жанрами */}
      <button onClick={handleSortByGenres}>
        Сортувати за обраними жанрами
      </button>

      {/* Виведення відфільтрованих книг */}
      <div className="bookGenre">
        {filteredBooks.map((book) => (
          <div key={book.idBook}>
            {/* <h3>{book.title}</h3> */}
            {/* <p>{book.author}</p> */}
            <p>{book.genreUA}</p>
            {/* Додайте інші дані книги */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contacts;
