import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import { selectBooks } from '../../redux/slices/bookSlices';
import {
  setPaginationBooks,
  setPaginationPage,
  selectPaginationPage,
} from '../../redux/slices/paginationSlices';

function PaginationBooks() {
  const dispatch = useDispatch();

  const booksData = useSelector(selectBooks);

  const page = useSelector(selectPaginationPage);
  // const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  useEffect(() => {
    const bookPages = 6;
    const totalPages = Math.ceil(booksData.length / bookPages);

    const pages = Array.from({ length: totalPages }, (_, pageIndex) => {
      const startIndex = pageIndex * bookPages;
      const endIndex = startIndex + bookPages;
      return booksData.slice(startIndex, endIndex);
    });
    setPageQty(totalPages);
    console.log(pages);

    // if (booksData.length) {
    //   dispatch(setPaginationBooks(pages));
    // }
  }, [booksData, page]);

  return (
    <>
      {!!pageQty && (
        <Pagination
          count={pageQty}
          page={page}
          onChange={(_, num) => dispatch(setPaginationPage(num))}
          showFirstButton
          showLastButton
          sx={{
            // marginY: 3,
            // marginX: 'auto',
            '& .MuiPaginationItem-text': {
              color: 'white', // Зміна кольору тексту елементів !
            },
          }}
        />
      )}
    </>
  );
}

export default PaginationBooks;
