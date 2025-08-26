import { IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';



const DeleteBtnIcon = ({handleDelete}) => {
  return (
    <>
    <IconButton
                              onClick={handleDelete}
                              sx={{
                                color: '#ef5350', // soft red
                                '&:hover': {
                                  backgroundColor: 'rgba(239, 83, 80, 0.1)', // red tint hover
                                },
                              }}
                              TouchRippleProps={{
                                sx: {
                                  color: 'rgba(239, 83, 80, 0.4)', // ripple color on click
                                },
                              }}
                            >
                              <DeleteIcon fontSize="small" />
                            </IconButton>
    </>
  )
}

export default DeleteBtnIcon