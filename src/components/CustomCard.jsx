import { Card, CardContent } from "@mui/material";
import React, { useContext } from "react";
import { MyContext } from "../context/DrawerState";

const CustomCard = ({
  children,
  sx = {},
  disableCardContent = false,
  disableBgClr = false,
}) => {
  const { isDark } = useContext(MyContext);

  return (
    <Card
      elevation={0}
      sx={{
        bgcolor: `${
          disableBgClr
            ? "transparent"
            : isDark
            ? "cardBgClr.main"
            : "cardBgClr.light"
        }`,
        borderRadius: "5px",
        color: `${isDark ? "white" : undefined}`,
        ...sx,
      }}
    >
      {disableCardContent ? children : <CardContent>{children}</CardContent>}
    </Card>
  );
};

export default CustomCard;
