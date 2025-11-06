import { Typography } from "@mui/material";

const HeadingText = ({ sx = {}, children }) => {
  return (
    <Typography
      sx={{
        fontWeight: "bold",
        fontSize: { sm: 18, xs: 17 },
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default HeadingText;
