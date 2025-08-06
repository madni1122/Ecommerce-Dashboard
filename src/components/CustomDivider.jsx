import React, { useContext } from 'react';
import { MyContext } from '../context/DrawerState';
import { Divider } from '@mui/material';

const CustomDivider = () => {
  const { isDark } = useContext(MyContext);

  return (
    <Divider
      sx={{ bgcolor: `${isDark ? 'rgba(255, 255, 255, 0.16)' : undefined}` }}
    />
  );
};

export default CustomDivider;
