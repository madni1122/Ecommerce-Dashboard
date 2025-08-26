import { FormControlLabel, Switch } from '@mui/material'
import { useContext } from 'react';
import { MyContext } from '../context/DrawerState';

const CustomToggle = ({status, label}) => {
      const { isDark, isSmallScreen } = useContext(MyContext);
    
  return (
    <FormControlLabel
              sx={{ display: 'block', "& .MuiFormControlLabel-label": {
          fontSize: {sm:'15.5px', xs: '14px'},
          fontWeight: 500,
        }, }}
              control={<Switch size={isSmallScreen?'small':'medium'} checked={status} />}
              label={label}
            />
  )
}

export default CustomToggle