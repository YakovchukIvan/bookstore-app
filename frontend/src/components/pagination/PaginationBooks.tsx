import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from '@mui/material';

import { selectPageFilter } from '@/redux/slices';

interface PaginationBooksProps {
  page: number;
  setPage: (page: number) => void;
  pageQty: number;
  setPageQty?: (pageQty: number) => void;
}

function PaginationBooks({ page, setPage, pageQty }: PaginationBooksProps) {
  const isFilterActive = useSelector(selectPageFilter);

  useEffect(() => {
    if (isFilterActive) {
      setPage(1);
    }
  }, [isFilterActive, setPage]);

  return (
    <>
      {!!pageQty && (
        <Pagination
          count={pageQty}
          page={page}
          onChange={(_, num: number) => setPage(num)}
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
