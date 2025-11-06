import { createTheme } from "@mui/material";
import { fonts } from "./fonts";

const theme = createTheme({
  typography: {
    fontFamily: fonts.lato,
    strongCountUp: {
      fontWeight: 700,
      fontSize: "22px",
      "@media (min-width: 600px)": {
        fontSize: "24px",
      },
    },
  },
  palette: {
    cardBgClr: {
      main: "#2E2E48",
      light: "#ffffff",
    },
    primary: {
      main: "#475BE8",
      dark: "#3A4BD1",
    },
    graphSecondry: {
      main: "#E3E7FC",
      dark: "#C8D0FA",
    },
    secondary: {
      main: "#4CE13F",
    },
    orange: {
      main: "#F29A2E",
    },
    headingText: {
      main: "#F3F3F3",
      light: "#525252",
    },
    descriptionText: {
      main: "#D7D7D7",
      light: "#676767",
    },
    strongText: {
      main: "#ffffff",
      light: "#292929",
    },
    barChartLabel: {
      main: "#D0D0D0",
    },
    tableHeaderBg: {
      main: "#383854",
      light: "#F2F4FF",
    },
    tableStroke: {
      main: "#383856",
      light: "#F8F8F8",
    },
    warnClr: {
      main: "#EF0606",
    },
  },
});
export default theme;
