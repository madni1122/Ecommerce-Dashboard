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
        padding: "12px 19px 0px 16px",
        position: "relative",
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <HeadingText
          sx={{
            color: isDark ? "headingText.main" : "strongText.light",
          }}
        >
          Total Revenue
        </HeadingText>
        <Stack direction="row" spacing="20px">
          <BarChartLegend label="Profit" IconClr={theme.palette.primary.main} />
          <BarChartLegend
            label="Loss"
            IconClr={theme.palette.graphSecondry.main}
          />
        </Stack>
      </Stack>
      <Stack direction="row" spacing="18px" sx={{ mt: "12px" }}>
        <StrongCountUp countVal="50.4" />
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            color: "secondary.main",
          }}
        >
          <ArrowUpwardRoundedIcon fontSize="medium" />
          <Typography
            sx={{ fontSize: "12.5px", fontWeight: "medium", mt: "5.5px" }}
          >
            5% than last month
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
