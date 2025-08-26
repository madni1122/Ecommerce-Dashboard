import { CircularProgress } from "@mui/material";
import React, { useContext } from "react";
import { MyContext } from "../context/DrawerState";

const CustomProgress = (props) => {
  const { isSmallScreen, isMediumScreen } = useContext(MyContext);
  return (
    <CircularProgress
      variant="indeterminate"
      sx={(theme) => ({
        color: theme.palette.grey[500],
        ...theme.applyStyles("dark", {
          color: theme.palette.grey[500],
        }),
      })}
      size={isSmallScreen?40:isMediumScreen?50:60}
      thickness={3}
      {...props}
      value={100}
    />
  );
};

export default CustomProgress;
