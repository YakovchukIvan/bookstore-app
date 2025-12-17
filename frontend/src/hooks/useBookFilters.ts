import { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  selectAuthorFilter,
  selectGenreFilter,
  selectSortingFilter,
  selectTitleFilter,
} from '@/redux/slices/filterSlices';
import { selectBooks } from '@/redux/slices/bookSlices';
import { sortBooks } from '@/utils/sortProduct';
import { paginationBooks } from '@/utils/pagination';
import { BOOK_PER_PAGES } from '@/constants/constants';
import { Book, SortKey } from '@/types/types';

interface UseBookFiltersReturn {
  booksPagination: Book[];
  page: number;
  pageQty: number;
  booksQty: number;
  setPage: (page: number) => void;
}

export const useBookFilters = (): UseBookFiltersReturn => {
  const books = useSelector(selectBooks);
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const genreFilter = useSelector(selectGenreFilter);
  const sortingFilter = useSelector(selectSortingFilter);

  const [booksPagination, setBooksPagination] = useState<Book[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageQty, setPageQty] = useState<number>(0);
  const [booksQty, setBooksQty] = useState<number>(0);

  const booksSorted = useMemo(
    () => sortBooks(books, sortingFilter as SortKey),
    [books, sortingFilter],
  );

  const filteredBooks = useMemo(
    () =>
      booksSorted.filter((book) => {
        const matchesTitle = book.title.toLowerCase().includes(titleFilter.toLowerCase());
        const matchesAuthor = book.author.toLowerCase().includes(authorFilter.toLowerCase());
        const matchesGenre = genreFilter.length === 0 || genreFilter.includes(book.genre);

        return matchesTitle && matchesAuthor && matchesGenre;
      }),
    [booksSorted, titleFilter, authorFilter, genreFilter],
  );

  useEffect(() => {
    const totalPages = Math.ceil(filteredBooks.length / BOOK_PER_PAGES);
    setPageQty(totalPages);
    setBooksQty(filteredBooks.length);

    const pages = paginationBooks(filteredBooks);
    setBooksPagination(pages[page - 1] || []);
  }, [filteredBooks, page]);

  useEffect(() => {
    setPage(1);
  }, [titleFilter, authorFilter, genreFilter]);

  return { booksPagination, page, pageQty, booksQty, setPage };
};
