import { SORT_KEYS } from '../constants/constants';
import { Book, SortKey } from '../types/types';

export const sortBooks = (books: Book[], sort: SortKey): Book[] => {
  let sortedBooks: Book[] = [...books]; // Клонуємо масив книг для безпечного сортування

  switch (sort) {
    case SORT_KEYS[0]: // 'по популярності'
      sortedBooks.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
      break;
    case SORT_KEYS[1]: // 'по назві'
      const collator = new Intl.Collator('uk-UA', { sensitivity: 'base' });
      sortedBooks.sort((a, b) => collator.compare(a.title, b.title));
      break;
    case SORT_KEYS[2]: // 'по даті'
      sortedBooks.sort((a, b) => {
        const dateA = a.dateOfEntry ? new Date(a.dateOfEntry).getTime() : 0;
        const dateB = b.dateOfEntry ? new Date(b.dateOfEntry).getTime() : 0;
        return dateB - dateA;
      });
      break;
  }

  return sortedBooks;
};
