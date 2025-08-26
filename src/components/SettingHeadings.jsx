import { Typography } from '@mui/material'
import React from 'react'

const SettingHeadings = ({children, sx}) => {
  return (
    <Typography
            variant="h5"
            sx={{
              fontSize: {
      xs: "16px",  
      sm: "18px",  
      md: "20px",  
      lg: "22px", 
      ...sx
    },
              fontWeight: '600',
              fontFamily: 'sans-serif',
            }}
            component="h4"
          >
            {children}
          </Typography>
  )
}

export default SettingHeadings