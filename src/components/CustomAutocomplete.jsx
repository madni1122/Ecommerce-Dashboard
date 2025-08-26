import { Autocomplete, TextField } from '@mui/material';
import { useContext } from 'react';
import { MyContext } from '../context/DrawerState';


const CustomAutocomplete = ({ handleChange, options, width }) => {
  
  const { isDark, isSmallScreen, isMediumScreen } = useContext(MyContext);
  return (
    <Autocomplete
      onChange={(e, newVal) => handleChange(newVal)}
      size="small"
      disablePortal
      options={options}
      sx={{
         
        width: {md: width, sm: 200, xs: '40vw'},
        color: isDark ? '#fff' : '#000',
        '& .MuiSvgIcon-root': {
          color: isDark ? '#ccc' : '#000', // handles dropdown & clear icons
        },
      }}
      slotProps={{
        paper: {
          sx: {
            backgroundColor: isDark ? '#2c2c3e' : '#fff',
            color: isDark ? '#fff' : '#000',
            boxShadow: isDark
              ? '0px 4px 10px rgba(255,255,255,0.1)'
              : '0px 4px 12px rgba(0,0,0,0.1)',
            borderRadius: 2,
            pl:3
          },
        },
        popper: {
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 4], // Optional: separates dropdown slightly
              },
            },
          ],
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={isSmallScreen? 'Search...':"Search Products"}
          sx={{
            input: { color: isDark ? '#fff' : '#000', },
            label: { color: isDark ? '#bbb' : '#000',},
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: isDark ? '#444' : undefined,
              },
              '&:hover fieldset': {
                borderColor:isDark ? '#888' : '#000',
              },
              '&.Mui-focused fieldset': {
          borderColor: isDark ? '#bbb' : '#1976d2', // focus border
        },
            },
          }}
        />
      )}
    />
  );
};

export default CustomAutocomplete;
