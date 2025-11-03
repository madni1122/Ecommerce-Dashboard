import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import StatisticsIcon from "@mui/icons-material/SignalCellularAlt";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ListItemText from "@mui/material/ListItemText";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";

import { MyContext } from "../context/DrawerState";
import { fonts } from "../theme/fonts";

const drawerWidth = 240;
const setDrawerWidth = (scrWidth) => {
  return scrWidth >= 1200 ? drawerWidth : scrWidth >= 800 ? 190 : 175;
};

const openedMixin = (theme, screenwidth) => ({
  width: setDrawerWidth(screenwidth),
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, screenwidth }) => ({
  width: setDrawerWidth(screenwidth),
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme, screenwidth),
        "& .MuiDrawer-paper": openedMixin(theme, screenwidth),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function SideNav() {
  const { screenwidth, isDrawerOpen, isDark } = React.useContext(MyContext);
  const location = useLocation();
  const path =
    location.pathname.split("/").filter(Boolean).pop()?.toLowerCase() ||
    "dashboard";

  console.log(path);
  const getIconColor = (title) => ({
    color:
      title.toLowerCase() === path ? "white" : isDark ? "#E1E1E1" : "#808191",
    fontSize: isDrawerOpen ? "22.5px" : "none",
  });

  const navigate = useNavigate();

  return (
    <Box sx={{ display: "block" }}>
      <Box sx={{ display: "flex" }}>
        <Drawer
          screenwidth={screenwidth}
          variant="permanent"
          open={isDrawerOpen}
          sx={{
            position: "static",
            zIndex: 0,
          }}
          slotProps={{
            paper: {
              sx: {
                bgcolor: `${isDark ? "#2E2E48" : "#ffffff"}`, // Dark background
                color: `${isDark ? "#fff" : ""}`, // Light text
                borderRight: "1px solid rgba(255,255,255,0.1)", // Optional
              },
            },
          }}
        >
          <DrawerHeader>
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <List sx={{ px: isDrawerOpen ? "12px" : "0px" }}>
            {[
              {
                title: "Dashboard",
                icon: (
                  <DashboardOutlinedIcon
                    sx={{
                      ...getIconColor("Dashboard"),
                    }}
                  />
                ),
              },
              {
                title: "Statistics",
                icon: (
                  <StatisticsIcon
                    sx={{
                      ...getIconColor("Statistics"),
                    }}
                  />
                ),
              },
              {
                title: "Products",
                icon: (
                  <ProductionQuantityLimitsIcon
                    sx={{ ...getIconColor("Products") }}
                  />
                ),
              },
              {
                title: "Analytics",
                icon: <AnalyticsIcon sx={{ ...getIconColor("Analytics") }} />,
              },
              {
                title: "Settings",
                icon: <SettingsIcon sx={{ ...getIconColor("Settings") }} />,
              },
            ].map(({ title, icon }) => (
              <ListItem
                key={title}
                disablePadding
                sx={{
                  color:
                    title.toLowerCase() === path
                      ? "white"
                      : isDark
                      ? "#E1E1E1"
                      : "#808191",
                  display: "block",
                  bgcolor:
                    title.toLowerCase() === path ? "primary.main" : undefined,
                  borderRadius: "12px",
                }}
                onClick={() => {
                  navigate(
                    `${title === "Dashboard" ? "/" : "/" + title.toLowerCase()}`
                  );
                }}
              >
                <ListItemButton
                  disableRipple
                  sx={[
                    {
                      minHeight: 48,
                      borderRadius: "12px",
                      ":hover": {
                        bgcolor:
                          title.toLowerCase() === path
                            ? "transparent"
                            : isDark
                            ? "#3a3a50"
                            : "",
                      },
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    title={title}
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: isDrawerOpen ? "11px" : 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={title}
                    primaryTypographyProps={{
                      fontWeight: title.toLowerCase() === path ? 500 : 600,
                      fontSize: "15.3px",
                      fontFamily: fonts.manrope,
                    }}
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
            p: { sm: 3, xs: 2 },

            background: `${isDark ? "#383854" : "#F5F5F5"}`,
            fontFamily: fonts.lato,
          }}
        >
          <Box
            component="main"
            sx={{
              mt: "69px",
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
