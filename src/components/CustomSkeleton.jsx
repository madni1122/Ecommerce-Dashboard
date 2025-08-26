import {
  Skeleton,
} from '@mui/material';
import { MyContext } from '../context/DrawerState';
import { useContext } from 'react';

const CustomSkeleton = ({width, height, variant, sx={}}) => {
    const { isDark } = useContext(MyContext);
  
  return (
    <Skeleton
      sx={{
        bgcolor: `${isDark ? "rgba(255, 255, 255, 0.2)" : undefined}`,
        ...sx,
      }}
      animation="wave"
      variant={variant}
      width={width}
      height={height}

    />
  );
};

export default CustomSkeleton;
