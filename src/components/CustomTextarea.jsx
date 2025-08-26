import { TextareaAutosize, Box } from "@mui/material";
import React, { useContext } from "react";
import { MyContext } from "../context/DrawerState";

const CustomTextarea = ({
  placeholder,
  valueVariable,
  handleChange,
  validationError,
  ...rest
}) => {
  const { isDark, isSmallScreen } = useContext(MyContext);

  return (
    <Box
      sx={{
        width: "100%",
        "& textarea": {
          width: "100%",
          border: "1px solid",
          borderColor: validationError
            ? "#d32f2f"
            : isDark
            ? "#555"
            : "#ccc",
          borderRadius: 1,
          backgroundColor: "transparent",
          color: isDark ? "#fff" : "#000",
          padding: "16.5px 14px",
          boxSizing: "border-box",
          fontSize: isSmallScreen ? "14px" : "1rem",
          fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
          "&:hover": {
            borderColor: validationError
              ? "#d32f2f"
              : isDark
              ? "#aaa"
              : "#666",
          },
          "&:focus": {
            borderColor: validationError
              ? "#d32f2f"
              : isDark
              ? "#90caf9"
              : "#1976d2",
            outline: "none",
          },
        },
      }}
    >
      <TextareaAutosize
        {...rest}
        minRows={4}
        placeholder={placeholder}
        value={valueVariable}
        onChange={(e) => handleChange(e.target.value)}
      />
    </Box>
  );
};

export default CustomTextarea;
