import { Stack, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { MyContext } from "../context/DrawerState";
import { useContext } from "react";

const BarChartLegend = ({ label, IconClr }) => {
  const { isDark } = useContext(MyContext);

  return (
    <Stack direction="row" spacing="5px" alignItems="center">
      <CircleIcon
        sx={{
          color: `${IconClr}`,
          fontSize: { sm: "11.5px", xs: "10.5px" },
        }}
      />
      <Typography
        sx={{
          fontSize: { sm: 12, xs: 11 },
          color: isDark ? "descriptionText.main" : "descriptionText.light",
          fontWeight: "medium",
        }}
      >
        {label}
      </Typography>
    </Stack>
  );
};

export default BarChartLegend;
