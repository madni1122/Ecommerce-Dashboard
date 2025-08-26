import { Box, Grid, MenuItem, Stack } from '@mui/material';
import CustomTextField from './CustomTextField';
import CustomTextarea from './CustomTextarea';
import CustomCard from './CustomCard';
import BlackTypography from './BlackTypography';
import CustomDivider from './CustomDivider';
import { useContext } from 'react';
import { MyContext } from '../context/DrawerState';
import checkError from '../utils/checkError';
import SettingHeadings from './SettingHeadings';
import CustomProgress from './CustomProgress';
const types = ['Super Admin', 'Admin', 'User', 'Default'];

const PersonalInformation = ({
  validationErrors,
  submitAttemp,
}) => {
  const { location, locations, handleLocation, userType, handleUserType,  name,
        setName,
        fatherName,
        setFatherName,
        bio,
        setBio, } =
    useContext(MyContext);
  return (
    <CustomCard sx={{ minWidth: 48 + '%', pb: '18.5px', minHeight: '53%' }}>
     {location? <Stack spacing={2.2}>
        <SettingHeadings>Personal Information</SettingHeadings>
        <CustomDivider />

       <Grid
          container
          rowSpacing={3.5}
          columnSpacing={2}
          sx={{ pt: '10.9px' }}
        >
          <Grid size={{sm:6, xs:12}}>
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
          <Grid size={{sm:6, xs:12}}>
            <CustomTextField
              error={checkError(validationErrors.fatherName, submitAttemp)}
              required={validationErrors.fatherName}
              type="text"
              label="Father Name"
              valueVariable={fatherName}
              handleChange={(val) => {
                setFatherName(val);
              }}
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
          <Grid size={{sm:6, xs:12}}>
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
          <Grid size={{sm:6, xs:12}}>
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
      </Stack>:
      <Box sx={{
       width: "100%",
    minHeight: "50vh",             // 👈 fills full card height
    display: "flex",
    justifyContent: "center",   // horizontal center
    alignItems: "center",  
    }}><CustomProgress /></Box>}
    </CustomCard>
  );
};

export default PersonalInformation;
