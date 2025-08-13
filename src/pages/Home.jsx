import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StorefrontIcon from '@mui/icons-material/Storefront';
import '../index.css';
import AccordionDashboard from '../components/AccordionDashboard';
import BarChart from '../charts/BarChart';
import CountUp from 'react-countup';
import { MyContext } from '../context/DrawerState';
import { useContext } from 'react';

const Home = () => {
  const { isDark } = useContext(MyContext);
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{
                padding: '0 20px',
                minHeight: {sm:'140px', xs: '120px'},
                display: 'flex',
                color: 'white',
                flexDirection: 'column',
                justifyContent: 'center',
                background:
                  'linear-gradient(158deg, rgba(40, 34, 70, 1) 0%, rgba(30, 47, 141, 1) 100%);',
              }}
            >
              <CreditCardIcon sx={{ mb: {sm:2.5, xs: 1} }} fontSize="medium" />
              <Typography sx={{ mb: {xs: '2.6px', sm:'8px'}}} variant="h5" component="div">
                <CountUp
                  start={0}
                  end={500}
                  duration={0.6}
                  delay={0.4}
                  suffix=".00"
                  prefix="$"
                />
              </Typography>
              <Typography variant="body2" sx={{ color: '#ccd1d1' }}>
                Total Earning
              </Typography>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{
                background:
                  'linear-gradient(158deg, rgba(53, 138, 148, 1) 0%, rgba(91, 180, 96, 1) 100%);',
                color: 'white',
                padding: '0 20px',
               minHeight: {sm:'140px', xs: '120px'},
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <ShoppingBagIcon sx={{ mb: {sm:2.5, xs: 1} }} fontSize="medium" />
              <Typography sx={{ mb: {xs: '2.6px', sm:'8px'}}} variant="h5" component="div">
                <CountUp
                  start={0}
                  end={900}
                  duration={0.6}
                  delay={0.4}
                  suffix=".00"
                  prefix="$"
                />
              </Typography>
              <Typography variant="body2" sx={{ color: '#ccd1d1' }}>
                Total Order
              </Typography>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={2}>
              <Card
                sx={{
                  padding: '0 20px',
                  minHeight: '61px',
                  display: 'flex',
                  alignItems: 'center',
                  background:
                    'linear-gradient(158deg, rgba(53, 138, 148, 1) 0%, rgba(91, 180, 96, 1) 100%);',
                  color: 'white',
                }}
              >
                <Stack
                  spacing={{sm:3.5, xs: 1.9}}
                  direction="row"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <StorefrontIcon sx={{ mb: 2.5 }} fontSize="medium" />
                  <Stack >
                    <Typography variant="subtitle1" component="div">
                      <CountUp
                        start={0}
                        end={203}
                        duration={0.6}
                        delay={0.4}
                        suffix="k"
                        prefix="$"
                      />
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#ccd1d1' }}>
                      Total Income
                    </Typography>
                  </Stack>
                </Stack>
              </Card>
              <Card
                sx={{
                  padding: '0 20px',
                  minHeight: '61px',
                  display: 'flex',
                  alignItems: 'center',
                  bgcolor: `${isDark ? '#2c2c3e' : ''}`,
                  color: `${isDark ? '#fff' : ''}`,
                }}
              >
                <Stack
                  spacing={{sm:3.5, xs: 1.9}}
                  direction="row"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <StorefrontIcon sx={{ mb: 2.5 }} fontSize="medium" />
                  <Stack>
                    <Typography variant="subtitle1" component="div">
                      <CountUp
                        start={0}
                        end={203}
                        duration={0.6}
                        delay={0.4}
                        suffix="k"
                        prefix="$"
                      />
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: `${isDark ? 'gray' : 'text.secondary'}` }}
                    >
                      Total Income
                    </Typography>
                  </Stack>
                </Stack>
              </Card>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                minHeight: '100%',
                bgcolor: `${isDark ? '#2c2c3e' : ''}`,
                color: `${isDark ? '#fff' : ''}`,
              }}
            >
              <BarChart />
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                minHeight: {sm:'61vh', xs: '50vh'},
                bgcolor: `${isDark ? '#2c2c3e' : ''}`,
                color: `${isDark ? '#fff' : ''}`,
              }}
            >
              <Box sx={{ padding: {sm:'30px 20px', xs: '20px 12.5px'} }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '15.5px',
                    fontWeight: 600,
                    ml: 1.2,
                    mb: 2.2,
                    display: 'block',
                  }}
                  component="span"
                >
                  Popular Products
                </Typography>
                <AccordionDashboard>Accordion 1</AccordionDashboard>
                <AccordionDashboard>Accordion 2</AccordionDashboard>
                <AccordionDashboard>Accordion 3</AccordionDashboard>
                <AccordionDashboard>Accordion 4</AccordionDashboard>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
