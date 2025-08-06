import { Grid, Stack } from '@mui/material';
import CustomTextField from './CustomTextField';
import CustomTextarea from './CustomTextarea';
import CustomCard from './CustomCard';
import BlackTypography from './BlackTypography';
import CustomDivider from './CustomDivider';
import { useContext } from 'react';
import { MyContext } from '../context/DrawerState';
import checkError from '../utils/checkError';

const PersonalInformation = ({
  url,
  setUrl,
  address,
  setAddress,
  validationErrors,
  contactRgx,
  emailRgx,
  submitAttemp,
  regextTest,
}) => {
  const { contact, setContact, email, setEmail } = useContext(MyContext);
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
          Contact Information
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
              size="large"
              type="text"
              label="Contact Phone"
              valueVariable={contact}
              handleChange={(val) => {
                setContact(val);
              }}
            />
          </Grid>
          <Grid size={6}>
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
              size="large"
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
              size="large"
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
      </Stack>
    </CustomCard>
  );
};

export default PersonalInformation;
