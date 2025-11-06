import { useContext } from "react";
import CustomCard from "./CustomCard";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import HeadingText from "./HeadingText";
import BarChartLegend from "./BarChartLegend";
import StrongCountUp from "./StrongCountUp";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import SimpleBarChart from "../charts/DashboardBarChart";
import { MyContext } from "../context/DrawerState";

const TotalRevenueChart = () => {
  const { isDark } = useContext(MyContext);
  const theme = useTheme();

  return (
    <CustomCard
      disableCardContent={true}
      sx={{
        maxHeight: "321px",
        padding: { sm: "12px 19px 0px 16px", xs: "12px 15px 0px 16px" },
        position: "relative",
      }}
    >
      <Stack
        direction={{ sm: "row", xs: "column" }}
        justifyContent="space-between"
      >
        <HeadingText
          sx={{
            color: isDark ? "headingText.main" : "strongText.light",
            fontSize: { xs: "16px !important", sm: "17px !important" },
          }}
        >
          Total Revenue
        </HeadingText>
        <Stack direction="row" spacing={{ sm: "20px", xs: "10px" }}>
          <BarChartLegend label="Profit" IconClr={theme.palette.primary.main} />
          <BarChartLegend
            label="Loss"
            IconClr={theme.palette.graphSecondry.main}
          />
        </Stack>
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: "18px" }}
        sx={{ mt: "12px" }}
      >
        <StrongCountUp countVal="50.4" />

        <Stack
          direction="row"
          alignItems="center"
          sx={{
            color: "secondary.main",
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <ArrowUpwardRoundedIcon
            fontSize="small"
            sx={{ fontSize: { xs: "18px", sm: "20px" } }}
          />

          <Typography
            sx={{
              fontSize: { xs: "11.5px", sm: "12.5px" },
              fontWeight: 500,
              ml: "4px",
              mt: { xs: 0, sm: "5.6px" },
              whiteSpace: "nowrap",
            }}
          >
            5% less than last month
          </Typography>
        </Stack>
      </Stack>

      <Box sx={{ mt: "36px" }}>
        <SimpleBarChart />
      </Box>
    </CustomCard>
  );
};

export default TotalRevenueChart;
