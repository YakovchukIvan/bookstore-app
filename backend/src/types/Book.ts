// Основний інтерфейс для книги
export interface Book {
  idBook: number;
  title: string;
  author: string;
  caption: string;
  year: number;
  imgSrc: string[];
  isFavorite: boolean;
  genre: string;
  genreUA: string;
  slug: string;
  dateOfEntry: string; // формат: "YYYY-MM-DD"
  rating: number;
  reviewCount: number;
}
