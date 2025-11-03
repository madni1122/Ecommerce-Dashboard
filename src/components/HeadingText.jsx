import { Typography } from "@mui/material";

const HeadingText = ({ sx = {}, children }) => {
  return (
    <Typography
      sx={{
        fontWeight: "bold",
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default HeadingText;
