import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery,
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import CustomCard from "../components/CustomCard";
import EditBtnIcon from "../components/EditBtnIcon";
import DeleteBtnIcon from "../components/DeleteBtnIcon";
import CustomSkeleton from "../components/CustomSkeleton";

export default function ResponsiveTableCards({
  rowsData,
  handleOpen,
  handleDelete,
}) {
  const textOverflowRange = useMediaQuery("(max-width:375px)");

  const handleTextOverflow = (string) => {
    if (string.length >= 13 && textOverflowRange)
      return string.slice(0, 8).trim() + "...";
    return string;
  };

  return (
    <>
      {rowsData.length > 0
        ? rowsData.map(({ id, name, price, category, date }, i) => (
            <CustomCard key={i} sx={{ mb: 2, mt: "12px" }}>
              <Stack
                spacing={2}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h6">{handleTextOverflow(name)}</Typography>
                <Typography
                  sx={{ fontSize: { sm: 14, xs: 12 }, color: "#9b9b9bff" }}
                >
                  {date}
                </Typography>
              </Stack>
              <Typography>Price: {price}</Typography>
              <Typography>Category: {category}</Typography>
              {/* Add / Delete Buttons */}
              <Stack direction="row" spacing={0}>
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
              </Stack>
            </CustomCard>
          ))
        : [1, 2, 3].map((elem, idx) => (
            <CustomCard key={idx} sx={{ mb: 2, mt: "12px", height: '156px' }}>
              <Stack
                spacing={2}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <CustomSkeleton variant="text" width='59%' height={27.5} />
                <CustomSkeleton variant="text" width='30%' height={15}/>
              </Stack>
              <Stack spacing={0.5} mt={0.5}>

              <CustomSkeleton variant="text" width='50%' height={20.5} />
              <CustomSkeleton variant="text" width='100%' height={20.5} />
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
