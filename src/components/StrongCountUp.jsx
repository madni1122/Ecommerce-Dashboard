import { Typography } from "@mui/material";
import { useContext } from "react";
import CountUp from "react-countup";
import { MyContext } from "../context/DrawerState";

const StrongCountUp = ({ countVal, sx = {} }) => {
  const { isDark } = useContext(MyContext);
  return (
    <Typography
      sx={{
        ...sx,
        mb: { xs: "2.6px", sm: 0 },
        color: isDark ? "strongText.main" : "strongText.light",
      }}
      variant="strongCountUp"
      component="div"
    >
      <CountUp
        start={0}
        end={countVal}
        duration={0.6}
        delay={0.4}
        prefix="$"
        decimals={1}
        suffix="K"
      />
    </Typography>
  );
};

export default StrongCountUp;
