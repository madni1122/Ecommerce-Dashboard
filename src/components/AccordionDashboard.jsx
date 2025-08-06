import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useContext } from 'react';
import { MyContext } from '../context/DrawerState';

const AccordionDashboard = ({ children }) => {
  const { isDark } = useContext(MyContext);

  return (
    <>
      <Accordion
        sx={{
          bgcolor: `${isDark ? '#2c2c3e' : ''}`,
          color: `${isDark ? '#fff' : ''}`,
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: `${isDark ? '#fff' : ''}`,
              }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">{children}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AccordionDashboard;
