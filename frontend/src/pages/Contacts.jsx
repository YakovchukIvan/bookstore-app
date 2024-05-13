import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Pagination, Stack } from '@mui/material';

import { selectBooks } from '../redux/slices/bookSlices';

function Contacts() {
  const booksData = useSelector(selectBooks);

  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  useEffect(() => {
    const pages = [];
    const bookPages = 6;
    const totalPages = Math.ceil(booksData.length / bookPages);

    for (let i = 0; i < totalPages; i++) {
      const startIndex = i * bookPages;
      const endIndex = startIndex + bookPages;
      const pageBooks = booksData.slice(startIndex, endIndex);
      pages.push(pageBooks);
    }
    console.log(books);
    setPageQty(totalPages);
    setBooks(pages[page - 1]);
  }, [booksData, page]);

  return (
    <div className="contact">
      <h2>Поки що тестова сторінка</h2>
      <>
        <Stack spacing={2}>
          {!!pageQty && (
            <Pagination
              count={pageQty}
              page={page}
              onChange={(_, num) => setPage(num)}
              showFirstButton
              showLastButton
              sx={{
                // marginY: 3,
                // marginX: 'auto',

                '& .MuiPaginationItem-text': {
                  color: 'white', // Зміна кольору тексту елементів
                },
              }}
            />
          )}
          {books
            ? books.map((book) => (
                <Link key={book.idBook} to={`/courses/${book.slug}`}>
                  {book.title}
                </Link>
              ))
            : 'Loading'}
        </Stack>
      </>
    </div>
  );
}

export default Contacts;
