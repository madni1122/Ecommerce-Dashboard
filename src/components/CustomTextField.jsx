import { TextField } from '@mui/material';
import { useContext } from 'react';
import { MyContext } from '../context/DrawerState';

const CustomTextField = ({
  error,
  label,
  valueVariable,
  handleChange,
  type,
  extraprops,
  children,
  submitAttemp,
  size,
  ...rest
}) => {
  const { isDark } = useContext(MyContext);

  return (
    <TextField
      
      error={error}
      size={size}
      sx={{
        width: '100%',
        input: {
          color: isDark ? '#fff' : '#000',
        },
        label: {
          color: isDark ? '#bbb' : '#000',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: isDark ? '#555' : undefined, // Default border
          },
        },
        '& .MuiFormHelperText-root': {
          color: isDark ? '#f88' : undefined,
        },
        '& .MuiSelect-icon': {
          color: isDark ? '#ccc' : undefined, // light color in dark mode
        },
        '& .MuiSelect-select': {
          color: isDark ? '#fff' : '#000', // selected value text color
        },
      }}
      id="outlined-basic"
      type={type}
      label={label}
      value={valueVariable}
      onChange={(e) => handleChange(e.target.value)}
      {...(extraprops || {})}
      {...rest}
    >
      {children ? children : ''}
    </TextField>
  );
};

export default CustomTextField;
