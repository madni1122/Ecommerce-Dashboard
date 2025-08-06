import React, { useContext } from 'react';
import { MyContext } from '../context/DrawerState';
import { Typography } from '@mui/material';

const BlackTypography = ({
  children,
  sx,
  variant = 'body2',
  component = 'h4',
  ...rest
}) => {
  const { isDark } = useContext(MyContext);
  return (
    <Typography
      variant={variant}
      component={component}
      sx={{
        color: `${isDark ? '#ffffff' : '#000000ff'}`,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default BlackTypography;
