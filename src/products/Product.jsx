import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { db } from "../firebase-config";
import { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import Swal from "sweetalert2";
import Popup from "../components/Popup";
import { toast } from "react-toastify";
import { MyContext } from "../context/DrawerState";
import CustomAutocomplete from "../components/CustomAutocomplete";
import checkValidation from "../utils/checkValidation";
import showValidationToast from "../utils/completeFields";
import showUpdateToast from "../utils/swalUpdateToast";
import ResponsiveTableCards from "./TstingCompnt";
import EditBtnIcon from "../components/EditBtnIcon";
import DeleteBtnIcon from "../components/DeleteBtnIcon";
import CustomSkeleton from "../components/CustomSkeleton";
const skeletonArray = [1, 2, 3];
const tableHeading = ["Name", "Price", "Category", "Date", "Action"];

export default function Product() {
  const { isDark, isSmallScreen } = React.useContext(MyContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [popupTitle, setPopupTitle] = useState(null);
  const [prodName, setProdName] = useState("");
  const [prodPrice, setProdPrice] = useState("0");
  const [prodCategory, setProdCategory] = useState("");
  const [currentProdId, setCurrentProdId] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [submitAttemp, setSubmitAttemp] = useState(false);
  const [validation, setValidation] = useState({
    nameError: "",
    priceError: "",
    categoryError: "",
  });
  const isMobile = useMediaQuery("(max-width:900px)");

  const empCollectionRef = collection(db, "products");
  const productNames = rows.map(({ name }) => name);

  const handlePrice = (value) => {
    let updatedPrice = value.replace(/^0+/, "");
    setProdPrice(updatedPrice);
  };

  const handleOpen = (mode = "Add Product", productData) => {
    setPopupTitle(mode);
    setOpen(true);
    if (productData) {
      setProdName(productData.name);
      setProdPrice(productData.price);
      setProdCategory(productData.category);
      setCurrentProdId(productData.id);
    }
  };
  const handleClose = () => {
    setOpen(false);
    setFieldsEmpty();
    setCurrentProdId(null);
    setSubmitAttemp(false);
  };

  useEffect(() => {
    let nameError = "";
    let priceError = "";
    let categoryError = "";
    if (!prodName) {
      nameError = "Enter Name";
    }
    if (!parseInt(prodPrice)) {
      priceError = "Enter Price";
    }
    if (!prodCategory) {
      categoryError = "Select a Category";
    }
    setValidation({ nameError, priceError, categoryError });
  }, [prodName, prodPrice, prodCategory]);

  useEffect(() => {
    async function fetchData() {
      setSubmitLoading(true);
      await getProduts();
      setSubmitLoading(false);
    }
    fetchData();
  }, []);

  const setFieldsEmpty = () => {
    setProdPrice("0");
    setProdCategory("");
    setProdName("");
  };
  const filterData = async (val) => {
    if (val) {
      let updatedRows = rows.filter((obj) => obj.name === val);
      setRows(updatedRows);
    } else {
      setSearchLoading(true);
      await getProduts();
      setSearchLoading(false);
    }
  };

  const getProduts = async () => {
    const data = await getDocs(empCollectionRef);
    let formattedtData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setRows(formattedtData);
  };

  const deleteProduct = async (id) => {
    let userDoc = doc(db, "products", id);
    if(rows.length===1){
      toast('Sorry! Atleast one product is needed.', {
    type: 'error',
  })
      return
    }
    try {
      let result = await deleteDoc(userDoc);
      let result2 = await getProduts();
      Swal.fire({
      title: "Deleted!",
      text: "Your product has been deleted.",
      icon: "success",
    });
    } catch (error) {
      console.log(error);
       Swal.fire({
      title: "Error!",
      text: "Try again later.",
      icon: "error  ",
    });

    return
    }
    
    
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.value) deleteProduct(id);
    });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const formatString = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  const addProduct = async () => {
    setSubmitAttemp(true);
    if (!checkValidation(validation)) {
      showValidationToast("Please complete all fields!");
      return;
    }
    setSubmitLoading(true);
    await addDoc(empCollectionRef, {
      name: formatString(prodName),
      category: prodCategory,
      price: prodPrice,
      date: String(new Date().toLocaleDateString()),
    });
    getProduts();
    handleClose();
    setSubmitLoading(false);
    Swal.fire({
      title: "Submitted!",
      text: "Your product has been added.",
      icon: "success",
    });
  };
  const updateProduct = async () => {
    setSubmitAttemp(true);
    if (!checkValidation(validation)) {
      showValidationToast("Please complete all fields!");
      return;
    }
    setSubmitLoading(true);
    const prodDoc = doc(db, "products", currentProdId);
    await updateDoc(prodDoc, {
      name: formatString(prodName),
      category: prodCategory,
      price: prodPrice,
    });
    getProduts();
    handleClose();
    setSubmitLoading(false);
    showUpdateToast("Updated!", "Your product has been updated.");
  };

  const darkModeCellProps = (content) => {
    return (
      <TableCell
        sx={{
          color: `${isDark ? "#ffffff" : "text.primary"}`,
        }}
      >
        {content}
      </TableCell>
    );
  };

  return (
    <>
      <Popup
        open={open}
        handleClose={handleClose}
        prodName={prodName}
        prodCategory={prodCategory}
        prodPrice={prodPrice}
        setProdName={setProdName}
        setProdCategory={setProdCategory}
        handlePrice={handlePrice}
        addProduct={addProduct}
        updateProduct={updateProduct}
        submitLoading={submitLoading}
        validation={validation}
        submitAttemp={submitAttemp}
      >
        {popupTitle}
      </Popup>

      <Paper
        sx={{
          overflow: "hidden",
          px: "12px",
          bgcolor: `${isDark ? "#2c2c3e" : ""}`,
          color: `${isDark ? "#fff" : ""}`,
          boxSizing: "border-box",
          maxWidth: { md: "100%", xs: "100vw" },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: { md: 25.2, sm: 22, xs: 20 },
            padding: { md: 4, sm: 3, xs: 2 },
          }}
          component="h2"
        >
          Products List
        </Typography>
        <Divider
          sx={{
            bgcolor: `${isDark ? "#fff" : ""}`,
          }}
        />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          mt={1.5}
        >
          <Box sx={{ position: "relative" }}>
            {searchLoading && (
              <CircularProgress
                sx={{
                  position: "absolute",
                  right: "13%",
                  bottom: "30%",
                  color: `${isDark ? "#fff" : "text.secondary"}`,
                }}
                size={15}
                color="inherit"
              />
            )}
            <CustomAutocomplete
              handleChange={filterData}
              options={productNames}
              width={300}
            />
          </Box>
          {isSmallScreen ? (
            <IconButton
              size="medium"
              color="primary"
              onClick={() => handleOpen()}
            >
              <AddCircleOutlineIcon />
            </IconButton>
          ) : (
            <Button
              disableElevation
              variant="contained"
              size="medium"
              endIcon={<AddCircleOutlineOutlinedIcon />}
              onClick={() => handleOpen()}
            >
              ADD
            </Button>
          )}
        </Stack>
        {!isMobile ? (
          <>
            <TableContainer
              sx={{ maxHeight: 440, mt: "12px", overflowX: "auto", bgcolor: isDark?undefined:'#fafaf9' }}
            >
              <Table
                sx={{ minWidth: 600 }}
                stickyHeader
                aria-label="sticky table"
              >
                <TableHead>
                  <TableRow>
                    {tableHeading.map((title) => (
                      <TableCell
                        key={title}
                        sx={{
                          color: `${isDark ? "#ffffff" : ""}`,
                          bgcolor: `${isDark ? "#2c2c3e" : "#ffffff"}`,
                        }}
                        align="left"
                        style={{ minWidth: "100px", fontWeight: 550 }}
                      >
                        {title}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {!rows.length
                    ? skeletonArray.map((item) => (
                        <TableRow key={item}>
                          <TableCell>
                            <CustomSkeleton
                              variant="text"
                              width={165}
                              height={17.5}
                            />
                           
                          </TableCell>
                          <TableCell>
                            <CustomSkeleton
                              variant="text"
                              width={100}
                              height={17.5}
                            />
                          </TableCell>
                          <TableCell>
                            <CustomSkeleton
                              variant="text"
                              width={165}
                              height={17.5}
                            />
                          </TableCell>
                          <TableCell>
                           <CustomSkeleton
                              variant="text"
                              width={100}
                              height={17.5}
                            />
                          </TableCell>

                          <TableCell>
                            <CustomSkeleton
                              variant="text"
                              width={100}
                              height={17.5}
                            />
                          </TableCell>
                        </TableRow>
                      ))
                    : rows
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map(({ id, name, price, category, date }) => (
                          <TableRow
                            key={id}
                            sx={{
                              ":hover": {
                                bgcolor: `${
                                  isDark
                                    ? "rgba(255,255,255,0.05)"
                                    : "whitesmoke"
                                }`,
                              },
                            }}
                          >
                            {darkModeCellProps(name)}
                            {darkModeCellProps(price)}
                            {darkModeCellProps(category)}
                            {darkModeCellProps(date)}
                            <TableCell>
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

                                <DeleteBtnIcon
                                  handleDelete={() => handleDelete(id)}
                                />
                              </Stack>
                            </TableCell>
                          </TableRow>
                        ))}
                </TableBody>
              </Table>
            </TableContainer>{" "}
            <TablePagination
              // Target Child Components with sx
              sx={{
                color: isDark ? "#ccc" : "#000",
                "& .MuiTablePagination-selectLabel": {
                  color: isDark ? "#ccc" : "#000",
                },
                "& .MuiTablePagination-select": {
                  color: isDark ? "#ccc" : "#000",
                },
                "& .MuiSvgIcon-root": {
                  color: isDark ? "#fff" : "#000", // This targets dropdown and nav icons
                },
                "& .MuiTablePagination-actions button": {
                  color: isDark ? "#ccc" : "#000", // For Prev/Next buttons
                },
              }}
              rowsPerPageOptions={[5, 15, 40]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        ) : (
          <ResponsiveTableCards
            rowsData={rows}
            handleDelete={handleDelete}
            handleOpen={handleOpen}
          />
        )}
      </Paper>
    </>
  );
}
