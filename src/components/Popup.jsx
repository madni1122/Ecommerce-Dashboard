import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Modal from '@mui/material/Modal';
import { Grid, IconButton, MenuItem } from '@mui/material';
import { useContext } from 'react';
import { MyContext } from '../context/DrawerState';
import CustomTextField from './CustomTextField';
import CustomBtn from './CustomBtn';
import checkError from '../utils/checkError';

const style = ({isDark, isSmallScreen, isMediumScreen}) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)', 
  width: isSmallScreen?270:isMediumScreen?340:400,
  border: '2px solid #000',
  bgcolor: isDark ? '#3a3a5a' : 'background.paper',
  color: isDark ? '#fff' : undefined,
  boxShadow: 24,
  p: `51px ${isSmallScreen? '20px': '32px'}  32px`,
});
const categories = ['Laptop', 'Mobile', 'Electronics', 'Food'];

export default function Popup({
  open,
  handleClose,
  children,
  prodName,
  prodPrice,
  prodCategory,
  setProdName,
  setProdCategory,
  handlePrice,
  addProduct,
  updateProduct,
  submitLoading,
  validation,
  submitAttemp,
}) {
  const { isDark, isSmallScreen, isMediumScreen } = useContext(MyContext);
  style.bgcolor = `${isDark ? '#3a3a5a' : 'background.paper'}`;
  style.color = `${isDark ? '#fff' : undefined}`;

  // console.log(checkError(validation.nameError));

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style({isDark, isSmallScreen, isMediumScreen})}>
          <IconButton
            sx={{
              position: 'absolute',
              right: '0',
              top: '0',
              color: `${isDark ? '#ccc' : undefined}`,
            }}
            disableTouchRipple
            disableRipple
            onClick={handleClose}
          >
            <CloseRoundedIcon fontSize="medium" />
          </IconButton>
          <Typography
            id={children}
            variant="h5"
            component="h2"
            sx={{ textAlign: 'center', fontSize: isMediumScreen?'1.25rem': isSmallScreen?'1.1rem':'1.5rem' }}
          >
            {children}
          </Typography>
          <Grid container spacing={2} mt={4}>
            <Grid size={12}>
              <CustomTextField
                size="small"
                type="text"
                label="Name"
                valueVariable={prodName}
                handleChange={setProdName}
                error={checkError(validation.nameError, submitAttemp)}
              />
            </Grid>
            <Grid size={6}>
              <CustomTextField
                size="small"
                type="number"
                label="Price"
                valueVariable={prodPrice}
                handleChange={handlePrice}
                error={checkError(validation.priceError, submitAttemp)}
                extraprops={{
                  InputProps: {
                    startAdornment: (
                      <CurrencyRupeeIcon
                        sx={{
                          pr: 1,
                          color: `${isDark ? '#ccc' : 'text.secondary'}`,
                        }}
                        fontSize="small"
                      />
                    ),
                  },
                }}
              />
            </Grid>
            <Grid size={6}>
              <CustomTextField
                size="small"
                submitAttemp={submitAttemp}
                label="Category"
                valueVariable={prodCategory}
                handleChange={setProdCategory}
                error={checkError(validation.categoryError, submitAttemp)}
                extraprops={{ select: true }}
                children={categories.map((option, idx) => (
                  <MenuItem key={idx} value={option}>
                    {option}
                  </MenuItem>
                ))}
              />
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center' }} mt={2.5}>
            {children?.includes('Add') ? (
              <CustomBtn
                contnt="Submit"
                submitLoading={submitLoading}
                handleClick={addProduct}
              />
            ) : (
              <CustomBtn
                contnt="Update"
                submitLoading={submitLoading}
                handleClick={updateProduct}
              />
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
