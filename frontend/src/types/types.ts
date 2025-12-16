export interface Book {
  id: string;
  title: string;
  author: string;
  caption: string;
  year: number;
  imgSrc: string[];
  isFavorite: boolean;
  genre: string;
  genreUA: string;
  slug: string;
  rating?: number;
  dateOfEntry?: string;
  popularity?: number;
  reviewCount?: number;
}

export interface BookDetails {
  id: string;
  title: string;
  author: string;
  caption: string;
  year: number;
  imgSrc: string[];
  isFavorite: boolean;
  genre: string;
  genreUA: string;
  slug: string;
}

export interface BooksState {
  books: Book[];
  booksPagination: Book[][];
  isLoading: boolean;
}

export interface FilterState {
  title: string;
  author: string;
  genre: string[];
  sorting: string;
  pagePagination: number;
}

export interface PaginationState {
  booksPagination: Book[];
  bookPerPage: number;
  page: number;
  pageQty: number;
}

export interface RootState {
  bookStore: BooksState;
  filter: FilterState;
  pagination: PaginationState;
}

export interface TechnologyStackItem {
  title: string;
  srcImg: string;
  link: string;
}

export type SortKey = 'по популярності' | 'по назві' | 'по даті';
