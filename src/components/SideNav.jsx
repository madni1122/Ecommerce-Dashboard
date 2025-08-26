import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import List from '@mui/material/List';
import { Outlet, useNavigate } from 'react-router-dom';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsIcon from '@mui/icons-material/Settings';
import { MyContext } from '../context/DrawerState';

const drawerWidth = 240;
const setDrawerWidth = (scrWidth) => {
  return scrWidth >= 1200 ? drawerWidth : scrWidth >= 800 ? 190 : 175;
};

const openedMixin = (theme, screenwidth) => ({
  width: setDrawerWidth(screenwidth),
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, screenwidth }) => ({
  width: setDrawerWidth(screenwidth),
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme, screenwidth),
        '& .MuiDrawer-paper': openedMixin(theme, screenwidth),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      },
    },
  ],
}));

export default function SideNav() {
  const { screenwidth } = React.useContext(MyContext);

  const { isDrawerOpen } = React.useContext(MyContext);
  const navigate = useNavigate();
  const { isDark } = React.useContext(MyContext);

  return (
    <Box sx={{ display: 'block' }}>
      <Box sx={{ display: 'flex' }}>
        <Drawer
          screenwidth={screenwidth}
          variant="permanent"
          open={isDrawerOpen}
          sx={{
            position: 'static',
            zIndex: 0,
          }}
          slotProps={{
            paper: {
              sx: {
                bgcolor: `${isDark ? '#2a2a40' : '#fafaf9'}`, // Dark background
                color: `${isDark ? '#fff' : ''}`, // Light text
                borderRight: '1px solid rgba(255,255,255,0.1)', // Optional
              },
            },
          }}
        >
          <DrawerHeader>
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <List>
            {[
              {
                title: 'Home',
                icon: (
                  <HomeRoundedIcon
                    sx={{ color: `${isDark ? 'white' : 'inherit'}` }}
                  />
                ),
              },
              {
                title: 'Products',
                icon: (
                  <ProductionQuantityLimitsIcon
                    sx={{ color: `${isDark ? 'white' : 'inherit'}` }}
                  />
                ),
              },
              {
                title: 'Analytics',
                icon: (
                  <AnalyticsIcon
                    sx={{ color: `${isDark ? 'white' : 'inherit'}` }}
                  />
                ),
              },
              {
                title: 'Settings',
                icon: (
                  <SettingsIcon
                    sx={{ color: `${isDark ? 'white' : 'inherit'}` }}
                  />
                ),
              },
            ].map(({ title, icon }) => (
              <ListItem
                key={title}
                disablePadding
                sx={{
                  display: 'block',
                  ':hover': { bgcolor: `${isDark ? '#3a3a50' : ''}` },
                }}
                onClick={() => {
                  navigate(
                    `${title === 'Home' ? '/' : '/' + title.toLowerCase()}`
                  );
                }}
              >
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: 'initial',
                        }
                      : {
                          justifyContent: 'center',
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: 'center',
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: 'auto',
                          },
                    ]}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={title}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box
          minHeight="100vh"
          sx={{
            flexGrow: 1,
            p: {sm:3, xs: 2},

            background: `${
              isDark
                ? 'linear-gradient(158deg, #1f2937 0%, #0f172a 100%)'
                : 'linear-gradient(158deg, rgb(224, 224, 224) 0%, rgb(233, 237, 254) 100%);'
            }`,
          }}
        >
          <Box
            component="main"
            sx={{
              mt: '69px',
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
