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
          <Grid size={{ xs: 6, md: 4 }}>
            <Card
              sx={{
                padding: '0 20px',
                minHeight: '140px',
                display: 'flex',
                color: 'white',
                flexDirection: 'column',
                justifyContent: 'center',
                background:
                  'linear-gradient(158deg, rgba(40, 34, 70, 1) 0%, rgba(30, 47, 141, 1) 100%);',
              }}
            >
              <CreditCardIcon sx={{ mb: 2.5 }} fontSize="medium" />
              <Typography gutterBottom variant="h5" component="div">
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
          <Grid size={{ xs: 6, md: 4 }}>
            <Card
              sx={{
                background:
                  'linear-gradient(158deg, rgba(53, 138, 148, 1) 0%, rgba(91, 180, 96, 1) 100%);',
                color: 'white',
                padding: '0 20px',
                minHeight: '140px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <ShoppingBagIcon sx={{ mb: 2.5 }} fontSize="medium" />
              <Typography gutterBottom variant="h5" component="div">
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
                  spacing={3.5}
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
                  spacing={3.5}
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
                minHeight: '61vh',
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
                minHeight: '61vh',
                bgcolor: `${isDark ? '#2c2c3e' : ''}`,
                color: `${isDark ? '#fff' : ''}`,
              }}
            >
              <Box sx={{ padding: '30px 20px' }}>
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
