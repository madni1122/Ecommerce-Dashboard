import { Box, Grid, Stack } from '@mui/material';
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

const PersonalInformation = ({
  validationErrors,
  contactRgx,
  emailRgx,
  submitAttemp,
  regextTest,
}) => {
  const { contact, setContact, email, setEmail,  url, 
        setUrl,
        address,
        setAddress } = useContext(MyContext);
  return (
    <CustomCard sx={{ minWidth: 48 + '%', pb: '18.5px', minHeight: '53%' }}>
     {contact? <Stack spacing={2.2}>
         <SettingHeadings>Contact Information</SettingHeadings>
          
        <CustomDivider />

        <Grid
          container
          rowSpacing={3.5}
          columnSpacing={2}
          sx={{ pt: '10.9px' }}
        >
          <Grid size={{sm:6, xs:12}}>
            <CustomTextField
              helperText={
                contact.length && !contactRgx.test(contact.trim())
                  ? 'Invalid Number'
                  : ''
              }
              error={
                checkError(validationErrors.contact, submitAttemp) ||
                !regextTest(contactRgx, contact.trim())
              }
              required={validationErrors.contact}
              type="text"
              label="Contact Phone"
              valueVariable={contact}
              handleChange={(val) => {
                setContact(val);
              }}
            />
          </Grid>
          <Grid size={{sm:6, xs:12}}>
            <CustomTextField
              helperText={
                email.length && !emailRgx.test(email.trim())
                  ? 'Must look like user@mail.com'
                  : ''
              }
              error={
                checkError(validationErrors.email, submitAttemp) ||
                !regextTest(emailRgx, email.trim())
              }
              required={validationErrors.email}
              type="text"
              label="Email"
              valueVariable={email}
              handleChange={(val) => {
                setEmail(val);
              }}
            />
          </Grid>
          <Grid size={12}>
            <CustomTextField
              type="text"
              label="Profile URL"
              valueVariable={url}
              handleChange={(val) => {
                setUrl(val);
              }}
            />
          </Grid>
          <Grid size={12}>
            <CustomTextarea
              validationError={checkError(
                validationErrors.address,
                submitAttemp
              )}
              placeholder="Adress"
              valueVariable={address}
              handleChange={(val) => {
                setAddress(val);
              }}
            />
          </Grid>
        </Grid>
      </Stack>:<Box sx={{
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
