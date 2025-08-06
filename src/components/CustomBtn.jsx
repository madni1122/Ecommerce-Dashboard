import { useContext } from 'react';
import { MyContext } from '../context/DrawerState';
import { Button, CircularProgress, Typography } from '@mui/material';

const CustomBtn = ({ submitLoading, handleClick, contnt }) => {
  const { isDark } = useContext(MyContext);

  return (
    <Button
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
      }}
    >
      {submitLoading ? (
        <>
          <Typography sx={{ color: isDark ? '#bbb' : '#444', ml: 1 }}>
            {contnt}
          </Typography>
          <CircularProgress
            size={20}
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
