// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound.jsx";
import { lazy } from "react";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/index.js";
import "@fontsource/manrope";
import "@fontsource/lato";
const App = lazy(() => import("./App.jsx"));
console.log(theme);

const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const Statistics = lazy(() => import("./pages/Statistics.jsx"));
const Settings = lazy(() => import("./pages/Settings.jsx"));
const Products = lazy(() => import("./pages/Products.jsx"));
const Analytics = lazy(() => import("./pages/Analytics.jsx"));
const router = (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route
        path="/"
        element={
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/products" element={<Products />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

createRoot(document.getElementById("root")).render(router);
