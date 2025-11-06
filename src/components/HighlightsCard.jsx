import { Box, Stack, Typography } from "@mui/material";

import CountUp from "react-countup";
import CustomCard from "./CustomCard";
import DonutChart from "../charts/DonutChart";
import { useContext } from "react";
import { MyContext } from "../context/DrawerState";
import StrongCountUp from "./StrongCountUp";
import HeadingText from "./HeadingText";

const HighlightsCard = ({
  heading,
  countVal,
  description,
  transparent = false,
  donutClr,
}) => {
  const { isDark } = useContext(MyContext);
  return (
    <CustomCard
      disableCardContent={true}
      disableBgClr={transparent}
      sx={{
        padding: { sm: "20px 16px 22px", xs: "20px 12px 22px" },
        minHeight: { sm: "126px", xs: "120px" },
        color: "white",
        display: "flex",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          width: "100%",
          minHeight: "100%",
        }}
      >
        <Stack height="100%" direction="column" justifyContent="space-between">
          <HeadingText
            sx={{
              fontSize: { sm: "14px", xs: "13px" },
              color: isDark ? "headingText.main" : "headingText.light",
            }}
          >
            {heading}
          </HeadingText>
          <StrongCountUp countVal={countVal} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              fontSize: { sm: "14px", xs: "13px" },
              color: isDark ? "descriptionText.main" : "descriptionText.light",
            }}
          >
            {description}
          </Typography>
        </Stack>
        <Box
          sx={{
            width: { sm: "70px", xs: "62px" },
            height: { sm: "70px", xs: "62px" },
          }}
        >
          <DonutChart clr={donutClr} />
        </Box>
      </Stack>
    </CustomCard>
  );
};

export default HighlightsCard;
