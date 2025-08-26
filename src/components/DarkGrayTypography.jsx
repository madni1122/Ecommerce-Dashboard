import { Typography } from '@mui/material';
import React, { useContext } from 'react';
import { MyContext } from '../context/DrawerState';

const DarkGrayTypography = ({
  children,
  sx,
  variant = 'subtitle2',
  component = 'h4',
  ...rest
}) => {
  const { isDark } = useContext(MyContext);
  return (
    <Typography
      variant={variant}
      sx={{
        color: `${isDark ? '#bcbcbc' : '#535353ff'}`,
        overflowWrap: "anywhere",
        ...sx,
      }}
      component={component}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default DarkGrayTypography;
