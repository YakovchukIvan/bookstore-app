import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import { selectBooks } from '../../redux/slices/bookSlices';
// import { setPaginationBooks } from '../../redux/slices/paginationSlices';

function PaginationBooks({ page, setPage, pageQty }) {
  // const dispatch = useDispatch();

  // const booksData = useSelector(selectBooks);

  // useEffect(() => {
  //   // const pages = [];
  //   const bookPages = 6;
  //   const totalPages = Math.ceil(booksData.length / bookPages);

  //   // for (let i = 0; i < totalPages; i++) {
  //   //   const startIndex = i * bookPages;
  //   //   const endIndex = startIndex + bookPages;
  //   //   const pageBooks = booksData.slice(startIndex, endIndex);
  //   //   pages.push(pageBooks);
  //   // }

  //   setPageQty(totalPages);
  //   // dispatch(setPaginationBooks(booksData));
  // }, [booksData]);

  return (
    <>
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
              color: 'white', // Зміна кольору тексту елементів !
            },
          }}
        />
      )}
    </>
  );
}

export default PaginationBooks;
