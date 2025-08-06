import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StorefrontIcon from '@mui/icons-material/Storefront';
import '../index.css';
import AccordionDashboard from '../components/AccordionDashboard';
import BarChart from '../charts/BarChart';
import GeoChart from '../charts/GeoChart';
import PieChart from '../charts/PieChart';
import BarHChart from '../charts/BarHChart';
import CountUp from 'react-countup';
import { useContext } from 'react';
import { MyContext } from '../context/DrawerState';

const visitors = [
  { id: 1, visitors: 22000 },
  { id: 2, visitors: 22000 },
  { id: 3, visitors: 20000 },
  { id: 4, visitors: 32000 },
];

const Analytics = () => {
  const { isDark } = useContext(MyContext);

  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid container spacing={2} size={5}>
            {visitors.map(({ id, visitors }, idx) => (
              <Grid size={6} key={idx}>
                <Card
                  sx={{
                    padding: '0 20px',
                    minHeight: '132px',
                    display: 'flex',
                    color: 'white',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    background: `${
                      id % 2 === 0
                        ? 'linear-gradient(158deg, rgba(53, 138, 148, 1) 0%, rgba(91, 180, 96, 1) 100%);'
                        : 'linear-gradient(158deg, rgba(40, 34, 70, 1) 0%, rgba(30, 47, 141, 1) 100%);'
                    }`,
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                    sx={{ color: '#eceeeeff' }}
                  >
                    Visitors
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    <CountUp
                      start={0}
                      end={visitors}
                      duration={0.6}
                      delay={0.4}
                    />
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#ccd1d1' }}>
                    Since last week
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid size={7}>
            <Card
              sx={{
                bgcolor: `${isDark ? '#2c2c3e' : undefined}`,
              }}
            >
              <BarHChart />
            </Card>
          </Grid>
          <Grid size={8}>
            <Card
              sx={{
                maxHeight: '286px',
                bgcolor: `${isDark ? '#2c2c3e' : undefined}`,
              }}
            >
              <CardContent sx={{ height: '100%' }}>
                <GeoChart />
              </CardContent>
            </Card>
          </Grid>

          <Grid
            size={4}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card
              sx={{
                maxHeight: '286px',
                bgcolor: `${isDark ? '#2c2c3e' : undefined}`,
              }}
            >
              <PieChart />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Analytics;
