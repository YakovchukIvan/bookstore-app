import express, { Request, Response } from 'express';
import cors from 'cors';
import { Book } from './types/Book';

// Імпорт JSON файлу напряму
import booksData from '../data/books.json';

const app = express();

app.use(cors());

// Ендпоінт для отримання всіх книг
app.get('/books', (req: Request, res: Response<Book[]>) => {
  setTimeout(() => {
    res.json(booksData);
  }, 1000);
});

// Реалізація пошуку книги по slug
app.get('/books/:slug', (req: Request<{ slug: string }>, res: Response) => {
  const { slug } = req.params;
  const book = booksData.find((book: Book) => book.slug === slug);

  if (book) {
    setTimeout(() => {
      res.json(book);
    }, 1000);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Отримання порту з environment variables або за замовчуванням
const port: number = parseInt(process.env.PORT as string) || 4095;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
