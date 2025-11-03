import { Grid, useTheme } from "@mui/material";
import HighlightsCard from "../components/highlightsCard";
import TotalRevenueChart from "../components/TotalRevenueChart";
import MostSoldItemsCard from "../components/MostSoldItemsCard";
import LatestOrdersTable from "../components/DashboarTable";

const Dashboard = () => {
  const theme = useTheme();
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <HighlightsCard
          heading="Todays Sales"
          countVal="20.4"
          description="We have sold 123 items"
          donutClr={theme.palette.primary.main}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <HighlightsCard
          heading="Todays Revenue"
          countVal="8.2"
          description="Availabale to payout"
          donutClr={theme.palette.secondary.main}
          transparent={true}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <HighlightsCard
          heading="Total Orders"
          countVal="18.2"
          description="Availabale to payout"
          donutClr={theme.palette.orange.main}
        />
      </Grid>

      {/* Chart */}
      <Grid size={{ xs: 12, md: 8 }}>
        <TotalRevenueChart />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <MostSoldItemsCard />
      </Grid>
      <Grid size={12}>
        <LatestOrdersTable />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
