import {
  Divider,
  FormControlLabel,
  Grid,
  MenuItem,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import CustomTextField from './CustomTextField';
import CustomCard from './CustomCard';
import { useContext, useState } from 'react';
import { MyContext } from '../context/DrawerState';
import CustomDivider from './CustomDivider';
import SettingHeadings from './SettingHeadings';
import DarkGrayTypography from './DarkGrayTypography';
import CustomToggle from './CustomToggle';
const types = ['Super Admin', 'Admin', 'User', 'Default'];

const MyAccount = () => {
  const {
    location,
    locations,
    handleLocation,
    isDark,
    userType,
    handleUserType,
    isSmallScreen
    
  } = useContext(MyContext);

  return (
    <Stack spacing={2} fontFamily="sans-serif">
      <CustomCard sx={{ minWidth: 50 + '%', pb: '0px', height: '53%' }}>
        <Stack spacing={2.2}>
          <SettingHeadings>General Setting</SettingHeadings>
          <CustomDivider />

          <Grid
            container
            rowSpacing={{sm:3.5, xs: 2.5}}
            columnSpacing={2}
            sx={{ pt: '10.9px' }}
          >
            <Grid size={{sm:6, xs:12}}>
              <CustomTextField type="text" label="Contact Phone" />
            </Grid>
            <Grid size={{sm:6, xs:12}}>
              <CustomTextField type="text" label="Email" />
            </Grid>
            <Grid size={{sm:6, xs:12}}>
              <CustomTextField
                valueVariable={userType}
                handleChange={handleUserType}
                label="User Type"
                extraprops={{ select: true }}
                children={types.map((option, idx) => (
                  <MenuItem key={idx} value={option}>
                    {option}
                  </MenuItem>
                ))}
              />
            </Grid>
            <Grid size={{sm:6, xs:12}}>
              <CustomTextField
                valueVariable={location}
                handleChange={handleLocation}
                label="Location"
                extraprops={{ select: true }}
                children={locations.map((option, idx) => (
                  <MenuItem key={idx} value={option}>
                    {option}
                  </MenuItem>
                ))}
              />
            </Grid>
          </Grid>
        </Stack>
      </CustomCard>

      {/* Advanced Settings */}

      <CustomCard sx={{ minWidth: 50 + '%', pb: '0px', height: '53%' }}>
        <SettingHeadings>Advanced Setting</SettingHeadings>
          <CustomDivider sx={{mt: 2.2}}/>

        <DarkGrayTypography sx={{ fontSize: {sm:'16px', xs: '13.5px'} }}>
                Assign responsibility
              </DarkGrayTypography>
              <CustomToggle label='Gilad Gray' status={true}/>
              <CustomToggle label='Json Killian' status={false}/>
              <CustomToggle label='Antoine Llorca' status={true}/>
          
        <Typography
          variant="body2"
          component="span"
          sx={{
            color: 'error.main',
            fontSize: {sm:'13.5px', xs: '12px'},
            fontFamily: 'Roboto Mono',
            fontWeight: 500,
            mt: 2,
          }}
        >
          Be careful
        </Typography>
      </CustomCard>
    </Stack>
  );
};

export default MyAccount;
