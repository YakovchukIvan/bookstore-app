const express = require('express');
const cors = require('cors');
const booksData = require('./data/books.json');

const app = express();

app.use(cors());

app.get('/books', (req, res) => {
  setTimeout(() => {
    res.json(booksData);
  }, 1000);
});

// Реалізація пошуку книги по slug
app.get('/books/:slug', (req, res) => {
  const { slug } = req.params;
  const book = booksData.find((book) => book.slug === slug);
  if (book) {
    setTimeout(() => {
      res.json(book);
    }, 1000);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// app.get('/random-book-delayed', (req, res) => {
//   setTimeout(() => {
//     res.json(booksData);
//   }, 2000);
// });

const port = process.env.PORT || 4095;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
