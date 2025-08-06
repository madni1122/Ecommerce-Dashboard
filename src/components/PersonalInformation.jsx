import { Grid, MenuItem, Stack } from '@mui/material';
import CustomTextField from './CustomTextField';
import CustomTextarea from './CustomTextarea';
import CustomCard from './CustomCard';
import BlackTypography from './BlackTypography';
import CustomDivider from './CustomDivider';
import { useContext } from 'react';
import { MyContext } from '../context/DrawerState';
import checkError from '../utils/checkError';
const types = ['Super Admin', 'Admin', 'User', 'Default'];

const PersonalInformation = ({
  name,
  setName,
  fatherName,
  setFatherName,
  bio,
  setBio,
  validationErrors,
  submitAttemp,
}) => {
  const { location, locations, handleLocation, userType, handleUserType } =
    useContext(MyContext);
  return (
    <CustomCard sx={{ minWidth: 50 + '%', pb: '18.5px', height: '53%' }}>
      <Stack spacing={2.2}>
        <BlackTypography
          variant="h5"
          sx={{
            fontSize: '19px',
            fontWeight: '600',
            fontFamily: 'sans-serif',
          }}
        >
          Personal Information
        </BlackTypography>
        <CustomDivider />

        <Grid
          container
          rowSpacing={3.5}
          columnSpacing={2}
          sx={{ pt: '10.9px' }}
        >
          <Grid size={6}>
            <CustomTextField
              error={checkError(validationErrors.name, submitAttemp)}
              required={validationErrors.name}
              size="large"
              type="text"
              label="Name"
              valueVariable={name}
              handleChange={(val) => {
                setName(val);
              }}
            />
          </Grid>
          <Grid size={6}>
            <CustomTextField
              error={checkError(validationErrors.fatherName, submitAttemp)}
              required={validationErrors.fatherName}
              size="large"
              type="text"
              label="Father Name"
              valueVariable={fatherName}
              handleChange={(val) => {
                setFatherName(val);
              }}
              required
            />
          </Grid>
          <Grid size={12}>
            <CustomTextarea
              validationError={checkError(validationErrors.bio, submitAttemp)}
              placeholder="Bio"
              valueVariable={bio}
              handleChange={(val) => {
                setBio(val);
              }}
            />
          </Grid>
          <Grid size={6}>
            <CustomTextField
              error={checkError(validationErrors.userType, submitAttemp)}
              required={validationErrors.userType}
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
              error={checkError(validationErrors.location, submitAttemp)}
              required={validationErrors.location}
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
  );
};

export default PersonalInformation;
