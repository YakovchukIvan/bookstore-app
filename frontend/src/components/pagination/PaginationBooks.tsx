import { Pagination } from '@mui/material';

interface PaginationBooksProps {
  page: number;
  setPage: (page: number) => void;
  pageQty: number;
}

const PaginationBooks = ({ page, setPage, pageQty }: PaginationBooksProps) => (
  <>
    {!!pageQty && (
      <Pagination
        count={pageQty}
        page={page}
        onChange={(_, num: number) => setPage(num)}
        sx={{
          '& .MuiPaginationItem-text': {
            color: 'white',
          },
        }}
      />
    )}
  </>
);

export default PaginationBooks;
