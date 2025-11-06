export const getCircleClr = (status, theme) => {
  return status === "Delivered"
    ? theme.palette.secondary.main
    : status === "Pending"
    ? theme.palette.orange.main
    : theme.palette.warnClr.main;
};
