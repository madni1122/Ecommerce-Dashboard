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
import SettingHeadings from './SettingHeadings';
import CustomSkeleton from './CustomSkeleton';


const Profile = () => {
  const { isDark, ProfileData, isMediumScreen, isSmallScreen } = useContext(MyContext);
  const detailts = [{heading: 'Full Name:', value: ProfileData.name}, {heading: "Father's Name:", value: ProfileData.fatherName}, {heading: 'Address:', value: ProfileData.address}, {heading: 'Zip Code:', value: ProfileData.zipCode}, {heading: 'Website', value: ProfileData.url}]

  return (
    <Box>
      <Stack direction={isMediumScreen?'column': 'row'} spacing={2}>
        <CustomCard sx={{ minWidth: '50%', pb: '18.5px', height: '53%' }}>
          <Stack spacing={2.2}>
            <SettingHeadings sx={{textAlign: isSmallScreen?"center":'left'}}>M Madni</SettingHeadings>
            <CustomDivider />
          { [{icon: <MailIcon />, value:ProfileData.email}, {icon: <StayCurrentPortraitIcon />, value:ProfileData.contactWithCode}, {icon: <LocationOnIcon />, value:ProfileData.location}].map(({icon, value}, idx)=>(
            <>
            <Stack
          key={idx}
  direction={{ xs: "column", sm: "row" }} // column on mobile, row on tablet+
  spacing={1.7}
  pl={{sm:2, xs:0}}
  alignItems="center" // keeps column layout neat
>
  {value?<>
   {icon}
  <DarkGrayTypography sx={{ fontSize: { xs: "14px", sm: "15.5px" }, overflowWrap: "anywhere",   // allow wrapping for long words
    textAlign: isSmallScreen?"center": 'left' }}>
    {value} 
  </DarkGrayTypography>
  </>
 :
 <>
  
 <CustomSkeleton width={26} height={26} variant="circular" />
 <CustomSkeleton width='45%' height={19} sx={{ml: '18px'}}/>
 </>}
</Stack>
{idx!==2&&<CustomDivider />}
            </>
            ))}

          </Stack>
        </CustomCard>

        {/* About me */}

        <CustomCard sx={{ flexGrow: 1, pb: '18.5px' }}>
          <Stack spacing={2.2}>
            <SettingHeadings>About me</SettingHeadings>
            <CustomDivider />
            <Typography
              variant="body2"
              sx={{ color: `${isDark ? '#e0e0e0' : '#3e3d3d'}`, fontSize: { xs: "13px", sm: "14px" } }}
              component="h4"
              pb={1.5}
            >
              {ProfileData.bio?ProfileData.bio: <>
                <CustomSkeleton />
                <CustomSkeleton />
                <CustomSkeleton width='25%' />
              </>}
            </Typography>
            <SettingHeadings>Details</SettingHeadings>
            <CustomDivider />

            {detailts.map(({heading, value}, idx)=>{

            if(heading==='Website'&&!value) return null
            return <>
            <Stack
  direction={{ xs: "column", sm: "row" }} // column on mobile, row on tablet+
  spacing={1.2}
  pl={{ sm: 2, xs: 0 }}
  alignItems={{ xs: "flex-start", sm: "center" }}
>
  <BlackTypography
    sx={{
      fontSize: { xs: "13.5px", sm: "14.5px" },
      fontWeight: 500,
      minWidth: { sm: "125px", xs: "auto" }, // remove minWidth on mobile
    }}
  >
    {value?heading:<CustomSkeleton width={85}/>}
  </BlackTypography>

  {value?<DarkGrayTypography
    sx={{
      fontSize: { xs: "14.5px", sm: "15.5px" },
      fontWeight: 300,
    }}
    variant="body2"
  >
    {value}
  </DarkGrayTypography>: <CustomSkeleton width={isSmallScreen?"100%": '65%'}/>}
  

  
</Stack>
{<CustomDivider />}
            </>
            }
)}
          
          </Stack>
        </CustomCard>
      </Stack>
    </Box>
  );
};

export default Profile;
