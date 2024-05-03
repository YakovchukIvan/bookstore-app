import { SORT_KEYS } from './name';

export const sortBooks = (books, sort) => {
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
  // setBooks(sortedBooks);
  return sortedBooks;
};
