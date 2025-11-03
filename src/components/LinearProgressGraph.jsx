import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import { MyContext } from "../context/DrawerState";

function LinearProgressWithLabel(props) {
  const { isDark } = React.useContext(MyContext);

  return (
    <Stack sx={{ mt: "16px" }} spacing="6px">
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          color: isDark ? "headingText.main" : "strongText.light",
          fontSize: "14px",
        }}
      >
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {props.label}
          </Typography>
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Stack>
      <Box>
        <Box sx={{ width: "100%" }}>
          <LinearProgress
            sx={{ borderRadius: "9px", minHeight: "8px" }}
            variant="determinate"
            {...props}
          />
        </Box>
      </Box>
    </Stack>
  );
}

export default function LinearProgressGraph({ progressVal, label }) {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={progressVal} label={label} />
    </Box>
  );
}
