import { BOOK_PER_PAGES } from '../constants/constants';
import { Book } from '../types/types';

export const paginationBooks = (booksData: Book[]): Book[][] => {
  const bookPages: number = BOOK_PER_PAGES;
  const totalPages: number = Math.ceil(booksData.length / bookPages);

  const pages: Book[][] = Array.from({ length: totalPages }, (_, pageIndex) => {
    const startIndex: number = pageIndex * bookPages;
    const endIndex: number = startIndex + bookPages;
    return booksData.slice(startIndex, endIndex);
  });

  return pages;
};
