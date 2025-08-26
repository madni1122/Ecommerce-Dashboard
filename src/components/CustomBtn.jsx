import { useContext } from 'react';
import { MyContext } from '../context/DrawerState';
import { Button, CircularProgress, Typography } from '@mui/material';

const CustomBtn = ({ submitLoading, handleClick, contnt }) => {
  const { isDark, isMediumScreen, isSmallScreen } = useContext(MyContext);

  return (
    <Button
    size={isSmallScreen?'small':isMediumScreen?'medium':'large'}
      disableElevation
      variant="contained"
      disabled={submitLoading}
      onClick={handleClick}
      sx={{
        bgcolor: submitLoading ? (isDark ? '#444' : '#ccc') : 'primary.main',
        color: submitLoading ? (isDark ? '#bbb' : '#444') : '#fff',
        '&:hover': {
          bgcolor: submitLoading ? (isDark ? '#555' : '#bbb') : 'primary.dark',
        },
        fontSize: isSmallScreen?'12.5px':isMediumScreen?'14px':'16px'
      }}
    >
      {submitLoading ? (
        <>
          <Typography sx={{ color: isDark ? '#bbb' : '#444', ml: 1, fontSize: isSmallScreen?'12.5px':isMediumScreen?'14px':'16px' }}>
            {contnt}
          </Typography>
          <CircularProgress
            size={isSmallScreen?16:isMediumScreen?18:20}
            sx={{ color: isDark ? '#bbb' : '#444', ml: 1 }}
          />
        </>
      ) : (
        `${contnt}`
      )}
    </Button>
  );
};

export default CustomBtn;
