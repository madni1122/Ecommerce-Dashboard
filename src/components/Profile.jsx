import LocationOnIcon from '@mui/icons-material/LocationOn';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import MailIcon from '@mui/icons-material/Mail';
import { Box, Stack, Typography } from '@mui/material';
import CustomCard from './CustomCard';
import CustomDivider from './CustomDivider';
import { useContext } from 'react';
import { MyContext } from '../context/DrawerState';
import DarkGrayTypography from './DarkGrayTypography';
import BlackTypography from './BlackTypography';

const Profile = () => {
  const { isDark, ProfileData } = useContext(MyContext);

  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <CustomCard sx={{ minWidth: 374, pb: '18.5px', height: '53%' }}>
          <Stack spacing={2.2}>
            <BlackTypography
              variant="h5"
              sx={{
                fontSize: '19px',
                fontWeight: '600',
                fontFamily: 'sans-serif',
              }}
            >
              M Madni
            </BlackTypography>
            <CustomDivider />
            <Stack direction="row" spacing={4} pl={2}>
              <MailIcon />
              <DarkGrayTypography sx={{ fontSize: '15.5px' }}>
                {ProfileData.email}
              </DarkGrayTypography>
            </Stack>
            <CustomDivider />
            <Stack direction="row" spacing={4} pl={2}>
              <StayCurrentPortraitIcon />
              <DarkGrayTypography sx={{ fontSize: '15.5px' }}>
                {ProfileData.contactWithCode}
              </DarkGrayTypography>
            </Stack>
            <CustomDivider />
            <Stack direction="row" spacing={4} pl={2}>
              <LocationOnIcon />
              <DarkGrayTypography sx={{ fontSize: '15.5px' }}>
                {ProfileData.location}
              </DarkGrayTypography>
            </Stack>
          </Stack>
        </CustomCard>

        {/* About me */}

        <CustomCard sx={{ flexGrow: 1, pb: '18.5px' }}>
          <Stack spacing={2.2}>
            <BlackTypography
              variant="h5"
              sx={{
                fontSize: '19px',
                fontWeight: '600',
                fontFamily: 'sans-serif',
              }}
            >
              About me
            </BlackTypography>
            <CustomDivider />
            <Typography
              variant="body2"
              sx={{ color: `${isDark ? '#e0e0e0' : '#3e3d3d'}` }}
              component="h4"
              pb={1.5}
            >
              {ProfileData.bio}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: '19px',
                fontWeight: '600',
                fontFamily: 'sans-serif',
              }}
              component="h4"
            >
              Details
            </Typography>
            <CustomDivider />
            <Stack direction="row" spacing={4} pl={2}>
              <BlackTypography
                sx={{
                  fontSize: '14.5px',
                  fontWeight: '500',
                  minWidth: '125px',
                }}
              >
                Full Name:
              </BlackTypography>
              <DarkGrayTypography
                sx={{
                  fontSize: '15.5px',
                  fontWeight: 300,
                }}
                variant="body2"
              >
                {ProfileData.name}
              </DarkGrayTypography>
            </Stack>
            <CustomDivider />
            <Stack direction="row" spacing={4} pl={2}>
              <BlackTypography
                sx={{
                  fontSize: '14.5px',
                  fontWeight: '500',
                  minWidth: '125px',
                }}
              >
                Father's Name:
              </BlackTypography>
              <DarkGrayTypography
                sx={{
                  fontSize: '15.5px',
                  fontWeight: 300,
                }}
                variant="body2"
              >
                {ProfileData.fatherName}
              </DarkGrayTypography>
            </Stack>
            <CustomDivider />
            <Stack direction="row" spacing={4} pl={2}>
              <BlackTypography
                sx={{
                  fontSize: '14.5px',
                  fontWeight: '500',
                  minWidth: '125px',
                }}
              >
                Address:
              </BlackTypography>
              <DarkGrayTypography
                sx={{
                  fontSize: '15.5px',
                  fontWeight: 300,
                }}
                variant="body2"
              >
                {ProfileData.address}
              </DarkGrayTypography>
            </Stack>
            <CustomDivider />
            <Stack direction="row" spacing={4} pl={2}>
              <BlackTypography
                sx={{
                  fontSize: '14.5px',
                  fontWeight: '500',
                  minWidth: '125px',
                }}
              >
                Zip Code:
              </BlackTypography>

              <DarkGrayTypography
                sx={{
                  fontSize: '15.5px',
                  fontWeight: 300,
                }}
                variant="body2"
              >
                {ProfileData.zipCode}
              </DarkGrayTypography>
            </Stack>
            {ProfileData.url && (
              <>
                <CustomDivider />
                <Stack direction="row" spacing={4} pl={2}>
                  <BlackTypography
                    variant="body2"
                    component="h4"
                    sx={{
                      fontSize: '14.5px',
                      fontWeight: '500',
                      minWidth: '125px',
                    }}
                  >
                    Website:
                  </BlackTypography>
                  <DarkGrayTypography
                    sx={{
                      fontSize: '15.5px',
                      fontWeight: 300,
                    }}
                    variant="body2"
                  >
                    {ProfileData.url}
                  </DarkGrayTypography>
                </Stack>
              </>
            )}
          </Stack>
        </CustomCard>
      </Stack>
    </Box>
  );
};

export default Profile;
