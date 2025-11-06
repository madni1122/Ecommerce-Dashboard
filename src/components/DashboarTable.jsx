import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CustomCard from "./CustomCard";
import HeadingText from "./HeadingText";
import { MyContext } from "../context/DrawerState";
import CircleIcon from "@mui/icons-material/Circle";

import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import ResponsiveTableCards from "../products/TstingCompnt";
import { getCircleClr } from "../utils/getCircleClr";

function createData(name, id, date, customerName, status, price) {
  return { name, id, date, customerName, status, price };
}

const rows = [
  createData(
    "Iphone 13 Pro",
    11232,
    "Jun 29,2022",
    "Afaq Karim",
    "Delivered",
    400
  ),
  createData(
    "Mackbook Pro",
    11232,
    "Jun 29,2022",
    "Afaq Karim",
    "Pending",
    288
  ),
  createData(
    "Apple Watch",
    11232,
    "Jun 29,2022",
    "Afaq Karim",
    "Canceled",
    500
  ),
  createData(
    "Microsoft Book",
    11232,
    "Jun 29,2022",
    "Afaq Karim",
    "Delivered",
    100
  ),
  createData("Apple Pen", 11232, "Jun 29,2022", "Afaq Karim", "Delivered", 60),
  createData("Airpods", 11232, "Jun 29,2022", "Afaq Karim", "Delivered", 80),
];

const tableHeaders = [
  { label: "Products" },
  { label: "Order ID" },
  { label: "Date" },
  { label: "Customer name" },
  { label: "Status" },
  { label: "Amount" },
  { label: "Action" },
];

export default function LatestOrdersTable() {
  const isSmallScreen = useMediaQuery("(max-width:845px)");
  const { isDark } = React.useContext(MyContext);
  const theme = useTheme();
  const getStyles = () => ({
    color: isDark ? "strongText.main" : "strongText.light",
    fontSize: { md: "13px", lg: "14px" },
    "&.MuiTableCell-root": {
      padding: { md: "10px", lg: "10px 24px" },
    },

    borderBottom: "none",
  });

  return (
    <CustomCard
      disableCardContent={true}
      sx={{
        padding: "12px 19px 19px 16px",
      }}
    >
      <HeadingText
        sx={{
          color: isDark ? "strongText.main" : "strongText.light",
        }}
      >
        Latest Orders
      </HeadingText>
      {isSmallScreen ? (
        <ResponsiveTableCards rowsData={rows} />
      ) : (
        <TableContainer
          component={Paper}
          sx={{
            width: { md: "100%" },
            maxWidth: "100%", // ✅ takes full card width always
            overflowX: "auto",
            mt: "13px",
            borderRadius: "6px",
            boxShadow: "none",
            bgcolor: isDark ? "cardBgClr.main" : "cardBgClr.light",
            border: `1px solid ${
              isDark
                ? theme.palette.tableStroke.main
                : theme.palette.tableStroke.light
            }`,
          }}
          elevation={0}
        >
          <Table
            sx={{
              whiteSpace: "nowrap",
              borderCollapse: "separate",
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow
                sx={{
                  bgcolor: isDark
                    ? "tableHeaderBg.main"
                    : "tableHeaderBg.light",
                }}
              >
                {tableHeaders.map((header, index) => (
                  <TableCell
                    key={index}
                    align={header.label !== "Action" ? "left" : "center"}
                    sx={{
                      color: isDark ? "headingText.main" : "strongText.light",
                      fontWeight: 400,
                      fontSize: { md: "14.8px", lg: "16px" },
                      "&.MuiTableCell-root": {
                        padding: { xs: "10px", lg: "10px 24px" },
                      },
                      border: 0,
                    }}
                  >
                    {header.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    bgcolor: isDark ? "cardBgClr.main" : "cardBgClr.light",
                  }}
                >
                  <TableCell
                    align="left"
                    component="th"
                    sx={{ ...getStyles(), fontWeight: 500 }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell sx={{ ...getStyles() }} align="left">
                    #{row.id}
                  </TableCell>
                  <TableCell align="left" sx={{ ...getStyles() }}>
                    {row.date}
                  </TableCell>
                  <TableCell align="left" sx={{ ...getStyles() }}>
                    {row.customerName}
                  </TableCell>
                  <TableCell align="left" sx={{ ...getStyles() }}>
                    <Stack direction="row" spacing="5px" alignItems="center">
                      <CircleIcon
                        sx={{
                          color: getCircleClr(row.status, theme),
                          fontSize: "9.5px",
                        }}
                      />
                      <Typography sx={{ fontSize: "inherit" }}>
                        {row.status}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align="left" sx={{ ...getStyles() }}>
                    ${row.price.toFixed(2)}
                  </TableCell>
                  <TableCell align="center" sx={{ ...getStyles() }}>
                    <MoreHorizIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </CustomCard>
  );
}
