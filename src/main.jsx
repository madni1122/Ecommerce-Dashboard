// import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound.jsx';
import { lazy } from 'react';
import ScrollToTop from './components/ScrollToTop.jsx';
const App = lazy(() => import('./App.jsx'));

const Home = lazy(() => import('./pages/Home.jsx'));
const Settings = lazy(() => import('./pages/Settings.jsx'));
const Products = lazy(() => import('./pages/Products.jsx'));
const Analytics = lazy(() => import('./pages/Analytics.jsx'));
const router = (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

createRoot(document.getElementById('root')).render(router);
