import { Book } from '@/types/types';

export interface GenreItem {
  genre: string;
  genreUA: string;
}

interface GenreMap {
  [key: string]: {
    genre: string;
    genreUA: string;
    books: Book[];
  };
}

/**
 * Витягує унікальні жанри з масиву книг
 * @param books - Масив книг
 * @returns Масив унікальних жанрів з українською назвою
 */
export const extractUniqueGenres = (books: Book[]): GenreItem[] => {
  const genreMap: GenreMap = books.reduce<GenreMap>((acc, book) => {
    const { genre, genreUA } = book;

    if (!acc[genre]) {
      acc[genre] = { genre, genreUA, books: [book] };
    } else {
      acc[genre].books.push(book);
    }

    return acc;
  }, {});

  return Object.values(genreMap).map(({ genre, genreUA }) => ({ genre, genreUA }));
};
