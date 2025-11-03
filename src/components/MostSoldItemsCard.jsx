import { useContext } from "react";
import CustomCard from "./CustomCard";
import { Box, useTheme } from "@mui/material";
import { MyContext } from "../context/DrawerState";
import HeadingText from "./HeadingText";
import LinearProgressGraph from "./LinearProgressGraph";

const MostSoldItemsCard = () => {
  const { isDark } = useContext(MyContext);
  const theme = useTheme();
  const progressData = [
    { label: "Jeans", value: 70 },
    { label: "Shirts", value: 40 },
    { label: "Belts", value: 60 },
    { label: "Caps", value: 80 },
    { label: "Others", value: 20 },
  ];
  return (
    <CustomCard
      disableCardContent={true}
      sx={{
        minHeight: "100%",
        padding: "16px 18px 15px 16px",
      }}
    >
      <HeadingText
        sx={{
          color: isDark ? "headingText.main" : "strongText.light",
          fontSize: "18px",
        }}
      >
        Most Sold Items
      </HeadingText>
      <Box sx={{ mt: "2px" }}>
        {progressData.map(({ label, value }) => (
          <LinearProgressGraph key={label} progressVal={value} label={label} />
        ))}
      </Box>
    </CustomCard>
  );
};

export default MostSoldItemsCard;
