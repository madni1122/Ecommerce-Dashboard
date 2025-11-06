import * as React from "react";
import { useMediaQuery, Typography, Stack, useTheme } from "@mui/material";
import CustomCard from "../components/CustomCard";
import EditBtnIcon from "../components/EditBtnIcon";
import DeleteBtnIcon from "../components/DeleteBtnIcon";
import CustomSkeleton from "../components/CustomSkeleton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CircleIcon from "@mui/icons-material/Circle";

import { MyContext } from "../context/DrawerState";
import { getCircleClr } from "../utils/getCircleClr";

export default function ResponsiveTableCards({
  rowsData,
  handleOpen,
  handleDelete,
}) {
  const textOverflowRange = useMediaQuery("(max-width:375px)");
  const isDateBreakPoint = useMediaQuery("(max-width:500px)");
  const { isDark } = React.useContext(MyContext);
  const theme = useTheme();

  const handleTextOverflow = (string) => {
    if (string.length >= 10 && textOverflowRange)
      return string.slice(0, 8).trim() + "..";
    return string;
  };

  return (
    <>
      {rowsData.length > 0
        ? rowsData.map(
            ({ id, name, price, category = "", date, status = "" }, i) => (
              <CustomCard
                disableCardContent={true}
                key={i}
                sx={{
                  border: `${isDark ? "1px" : "3px"} solid ${
                    isDark
                      ? theme.palette.tableStroke.main
                      : theme.palette.tableStroke.light
                  }`,
                  mb: 2,
                  mt: "12px",
                  p: { sm: "16px 20px", xs: "16px" },
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    borderBottom: `1px solid ${
                      isDark
                        ? theme.palette.tableStroke.main
                        : theme.palette.tableStroke.light
                    }`,
                    pb: 1,
                    mb: 1,
                  }}
                >
                  {/* Column 1: Product Name (Left) */}
                  <Typography
                    sx={{
                      fontSize: { sm: 17, xs: 15 }, // ✅ Slightly bigger
                      fontWeight: 600, // ✅ More prominence
                      letterSpacing: "0.3px", // ✅ Clean & stronger visual
                      flexBasis: isDateBreakPoint ? "55%" : "35%",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      lineHeight: 1.25, // ✅ Better readability
                    }}
                  >
                    {handleTextOverflow(name)}
                  </Typography>

                  {/* Column 2: Category / Date (Center) */}
                  {!isDateBreakPoint && (
                    <Typography
                      sx={{
                        fontSize: { sm: 14, xs: 12 },
                        textAlign: "center",
                        flexBasis: "30%",
                        opacity: 0.8,
                      }}
                    >
                      {category ? category : date}
                    </Typography>
                  )}

                  {/* Column 3: Status / Actions (Right) */}
                  <Stack
                    direction="row"
                    spacing={0}
                    justifyContent="flex-end"
                    alignItems="center"
                    flexBasis="35%"
                  >
                    {category ? (
                      <>
                        <EditBtnIcon
                          handleEdit={() =>
                            handleOpen("Edit Product", {
                              id,
                              name,
                              price,
                              category,
                            })
                          }
                        />
                        <DeleteBtnIcon handleDelete={() => handleDelete(id)} />
                      </>
                    ) : (
                      <Stack direction="row" spacing="5px" alignItems="center">
                        <CircleIcon
                          sx={{
                            color: getCircleClr(status, theme),
                            fontSize: "9.5px",
                          }}
                        />
                        <Typography sx={{ fontSize: 13 }}>{status}</Typography>
                      </Stack>
                    )}
                  </Stack>
                </Stack>

                {/* Details (under header row) */}
                <Stack spacing={0.5} pl={0.2}>
                  <Typography sx={{ fontSize: { sm: 14, xs: 13 } }}>
                    Price: ${Number(price) ? Number(price).toFixed(2) : "0.00"}
                  </Typography>

                  <Typography
                    sx={{ fontSize: { sm: 14, xs: 13 }, opacity: 0.9 }}
                  >
                    {category ? `Date: ${date}` : `Order ID: #${id}`}
                  </Typography>
                </Stack>
              </CustomCard>
            )
          )
        : [1, 2, 3].map((elem, idx) => (
            <CustomCard
              key={idx}
              sx={{
                border: `${isDark ? "1px" : "3px"} solid ${
                  isDark
                    ? theme.palette.tableStroke.main
                    : theme.palette.tableStroke.light
                }`,
                mb: 2,
                mt: "12px",
                height: "156px",
              }}
            >
              <Stack
                spacing={2}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <CustomSkeleton variant="text" width="59%" height={27.5} />
                <CustomSkeleton variant="text" width="30%" height={15} />
              </Stack>
              <Stack spacing={0.5} mt={0.5}>
                <CustomSkeleton variant="text" width="50%" height={20.5} />
                <CustomSkeleton variant="text" width="100%" height={20.5} />
              </Stack>
              {/* Add / Delete Buttons */}
              <Stack direction="row" spacing={2} mt={1}>
                <CustomSkeleton variant="circular" width={25} height={25} />
                <CustomSkeleton variant="circular" width={25} height={25} />
              </Stack>
            </CustomCard>
          ))}
    </>
  );
}
