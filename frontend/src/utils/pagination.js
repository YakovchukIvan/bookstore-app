import { BOOK_PER_PAGES } from './name';

export const paginationBooks = (booksData) => {
  const bookPages = BOOK_PER_PAGES;
  const totalPages = Math.ceil(booksData.length / bookPages);

  // Створюємо масив сторінок з книгами за допомогою Array.from()
  const pages = Array.from({ length: totalPages }, (_, pageIndex) => {
    const startIndex = pageIndex * bookPages;
    const endIndex = startIndex + bookPages;
    return booksData.slice(startIndex, endIndex);
  });

  return pages;
};
