import * as React from 'react';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';

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

export default function CustomizedSelects() {
  const [sort, setSort] = React.useState('по популярності'); // Початкове значення "по популярності"

  const handleChange = (event) => {
    setSort(event.target.value);
    console.log(sort);
  };

  return (
    <FormControl variant="standard">
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={sort}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        <MenuItem value={'по популярності'}>по популярності</MenuItem>
        <MenuItem value={'по назві'}>по назві</MenuItem>
        <MenuItem value={'по даті'}>по даті</MenuItem>
      </Select>
    </FormControl>
  );
}
