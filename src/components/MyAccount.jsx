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
const types = ['Super Admin', 'Admin', 'User', 'Default'];

const MyAccount = () => {
  const {
    location,
    locations,
    handleLocation,
    isDark,
    userType,
    handleUserType,
    
  } = useContext(MyContext);

  return (
    <Stack spacing={2} fontFamily="sans-serif">
      <CustomCard sx={{ minWidth: 50 + '%', pb: '0px', height: '53%' }}>
        <Stack spacing={2.2}>
          <Typography
            variant="h5"
            sx={{
              fontSize: '19px',
              fontWeight: '600',
              fontFamily: 'sans-serif',
            }}
            component="h4"
          >
            General Setting
          </Typography>
          <CustomDivider />

          <Grid
            container
            rowSpacing={3.5}
            columnSpacing={2}
            sx={{ pt: '10.9px' }}
          >
            <Grid size={6}>
              <CustomTextField size="large" type="text" label="Contact Phone" />
            </Grid>
            <Grid size={6}>
              <CustomTextField size="large" type="text" label="Email" />
            </Grid>
            <Grid size={6}>
              <CustomTextField
                valueVariable={userType}
                handleChange={handleUserType}
                size="large"
                label="User Type"
                extraprops={{ select: true }}
                children={types.map((option, idx) => (
                  <MenuItem key={idx} value={option}>
                    {option}
                  </MenuItem>
                ))}
              />
            </Grid>
            <Grid size={6}>
              <CustomTextField
                valueVariable={location}
                handleChange={handleLocation}
                size="large"
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
        <Typography
          variant="h5"
          sx={{
            fontSize: '19px',
            fontWeight: '600',
          }}
          component="h4"
        >
          Advanced Setting
        </Typography>
        <Divider sx={{ mt: 2.2 }} />

        <Typography
          variant="body1"
          component="span"
          sx={{
            color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
          }}
        >
          Assign responsibility
        </Typography>
        <FormControlLabel
          sx={{ display: 'block' }}
          control={<Switch checked={true} />}
          label="Gilad Gray"
        />
        <FormControlLabel
          sx={{ display: 'block' }}
          control={<Switch checked={false} />}
          label="Json Killian"
        />
        <FormControlLabel
          sx={{ display: 'block' }}
          control={<Switch checked={true} />}
          label="Antoine Llorca"
        />
        <Typography
          variant="body2"
          component="span"
          sx={{
            color: 'error.main',
            fontSize: '13.5px',
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
