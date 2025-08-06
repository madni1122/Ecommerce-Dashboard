import { TextareaAutosize } from '@mui/material';
import React, { useContext } from 'react';
import { MyContext } from '../context/DrawerState';

const CustomTextarea = ({
  placeholder,
  valueVariable,
  handleChange,
  validationError,
  ...rest
}) => {
  const { isDark } = useContext(MyContext);

  return (
    <TextareaAutosize
      {...rest}
      aria-label="minimum height"
      minRows={4}
      placeholder={placeholder}
      value={valueVariable}
      onChange={(e) => handleChange(e.target.value)}
      style={{
        width: '100%',
        borderColor: validationError ? '#d32f2f' : isDark ? '#555' : undefined,
        borderRadius: 4,
        backgroundColor: `${isDark ? 'transparent' : undefined}`,
        color: `${isDark ? '#fff' : '#000'}`,
        padding: '16.5px 14px',
        boxSizing: 'border-box',
        fontSize: '1rem',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      }}
    />
  );
};

export default CustomTextarea;
