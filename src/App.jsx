import { Box } from '@mui/material';
import Header from './components/Header';
import SideNav from './components/SideNav';
import DrawerProvider from './context/DrawerState';
import { ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router-dom';

function App() {
  // console.log(useLocation());
  return (
    <DrawerProvider>
      <ToastContainer />
      <Header />

      <SideNav />
    </DrawerProvider>
  );
}

export default App;
