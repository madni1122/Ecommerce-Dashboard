import * as React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Card, CardContent } from '@mui/material';
import Profile from '../components/Profile';
import PersonalDetails from '../components/PersonalDetails';
import { MyContext } from '../context/DrawerState';
import MyAccount from '../components/MyAccount';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ px: {lg:3, sm:1, xs:0}, py:3}}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
  },
});

const AntTab = styled((props) => {
  return <Tab disableRipple {...props} />;
})(({ theme, isDark }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: `${isDark ? 'white' : 'rgba(0, 0, 0, 0.85)'}`,
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    color: '#40a9ff',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#1890ff',
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  })
);

export default function Settings() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { isDark, isSmallScreen } = React.useContext(MyContext);

  return (
    <Card
      sx={{ minHeight: '83vh', bgcolor: `${isDark ? '#2c2c3e' : undefined}` }}
    >
      <CardContent sx={{p: {xs:'16px 10px', sm: '16px'}}}>
        <Box
          sx={{
            width: '100%',
            bgcolor: `${isDark ? '#2c2c3e' : undefined}`,
            color: `${isDark ? 'white' : undefined}`,
          }}
        >
          <Box
            sx={{
              bgcolor: `${isDark ? '#2c2c3e' : undefined}`,
              color: `${isDark ? 'white' : undefined}`,
            }}
          >
            <AntTabs
              value={value}
              onChange={handleChange}
              aria-label="ant example"
            >
              <AntTab label={isSmallScreen?<AccountCircleIcon />:"Profile"} isDark={isDark} />
              <AntTab label={isSmallScreen?<ManageAccountsRoundedIcon />:"Personal Details"} isDark={isDark} />
              <AntTab label={isSmallScreen?<PersonAddAltRoundedIcon />:"My Account"} isDark={isDark} />
            </AntTabs>
            <CustomTabPanel value={value} index={0}>
              <Profile />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <PersonalDetails />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <MyAccount />
            </CustomTabPanel>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
