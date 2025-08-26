import React, { useContext } from 'react';
import { MyContext } from '../context/DrawerState';
import { Divider } from '@mui/material';

const CustomDivider = ({sx}) => {
  const { isDark } = useContext(MyContext);

  return (
    <Divider
      sx={{ bgcolor: `${isDark ? 'rgba(255, 255, 255, 0.16)' : undefined}`, ...sx }}
    />
  );
};

export default CustomDivider;
