import { IconButton } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';


const EditBtnIcon = ({handleEdit}) => {
  return (
    <>
    <IconButton
                              onClick={handleEdit}
                              sx={{
                                color: '#42a5f5', // lighter blue for dark mode
                                '&:hover': {
                                  backgroundColor: 'rgba(66, 165, 245, 0.1)', // light blue hover
                                },
                              }}
                              TouchRippleProps={{
                                sx: {
                                  color: 'rgba(66, 165, 245, 0.4)', // ripple color on click
                                },
                              }}
                            >
                              <EditIcon fontSize="small" />
                            </IconButton>
    </>
  )
}

export default EditBtnIcon
