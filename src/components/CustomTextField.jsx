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
  const { isDark, isSmallScreen, isMediumScreen } = useContext(MyContext);

  return (
    <TextField
      
      error={error}
      size={isSmallScreen?'small':isMediumScreen? 'medium':'large'}
      sx={{
    width: "100%",
    input: {
      color: isDark ? "#fff" : "#000",
      fontSize: isSmallScreen ? "14px" : "normal",
    },
    label: {
      color: isDark ? "#bbb" : "#000",
      fontSize: isSmallScreen ? "14px" : "normal",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: isDark ? "#555" : undefined, 
      },
      "&:hover fieldset": {
        borderColor: isDark ? "#aaa" : undefined, 
      },
      "&.Mui-focused fieldset": {
        borderColor: isDark ? "#90caf9" : undefined, 
      },
    },
    "& .MuiFormHelperText-root": {
      color: isDark ? "#f88" : undefined,
    },
    "& .MuiSelect-icon": {
      color: isDark ? "#ccc" : undefined,
    },
    "& .MuiSelect-select": {
      color: isDark ? "#fff" : "#000",
      fontSize: isSmallScreen ? "14px" : "normal",
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
