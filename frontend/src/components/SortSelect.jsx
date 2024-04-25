import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ cursor: 'pointer', background: 'red' }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Сортування"
          sx={{ minWidth: 200, cursor: 'pointer' }} // Set color to red
        />
      )}
      size="small"
    />
  );
}

const top100Films = [
  { label: 'По полярності' },
  { label: 'По назві' },
  { label: 'По даті' },
];
