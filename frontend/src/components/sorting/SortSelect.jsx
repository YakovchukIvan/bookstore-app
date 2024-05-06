import * as React from 'react';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import { useDispatch, useSelector } from 'react-redux';

import { SORT_KEYS } from '../../utils/name';
import {
  selectSortingFilter,
  setSortingFilter,
} from '../../redux/slices/filterSlices';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    width: '135px',
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #aa89cf41',
    color: 'white',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    background: 'rgba(255, 255, 255, 0.1)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: 4,
      borderColor: 'none',
    },
  },
}));

// const SORT_KEYS = ['по популярності', 'по назві', 'по даті'];

export default function CustomizedSelects() {
  const dispatch = useDispatch();
  const sortingFilter = useSelector(selectSortingFilter);

  const handleChange = (event) => {
    dispatch(setSortingFilter(event.target.value));
  };

  return (
    <FormControl variant="standard">
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={sortingFilter}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        {SORT_KEYS.map((item) => (
          <MenuItem value={item} key={item}>
            {item}
          </MenuItem>
        ))}
        {/* <MenuItem value={'по популярності'}>по популярності</MenuItem> */}
        {/* <MenuItem value={'по назві'}>по назві</MenuItem>
        <MenuItem value={'по даті'}>по даті</MenuItem> */}
      </Select>
    </FormControl>
  );
}
