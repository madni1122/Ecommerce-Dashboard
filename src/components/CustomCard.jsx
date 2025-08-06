import { Card, CardContent } from '@mui/material';
import React, { useContext } from 'react';
import { MyContext } from '../context/DrawerState';

const CustomCard = ({ children, sx = {} }) => {
  const { isDark } = useContext(MyContext);

  return (
    <Card
      sx={{
        bgcolor: `${isDark ? '#373753ff' : undefined}`,
        color: `${isDark ? 'white' : undefined}`,
        ...sx,
      }}
    >
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CustomCard;
