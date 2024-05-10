import { Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import { selectPageFilter } from '../../redux/slices/filterSlices';
import { useSelector } from 'react-redux';

function PaginationBooks({ page, setPage, pageQty }) {
  const isFilterActive = useSelector(selectPageFilter);

  useEffect(() => {
    if (isFilterActive) {
      setPage(1);
    }
  }, [isFilterActive]);

  return (
    <>
      {!!pageQty && (
        <Pagination
          count={pageQty}
          page={page}
          onChange={(_, num) => setPage(num)}
          // showFirstButton
          // showLastButton
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
