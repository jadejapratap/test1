import { BrowserRouter, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavMenu } from "@shopify/app-bridge-react";
import Routes from "./Routes";

import { QueryProvider, PolarisProvider } from "./components";
import './App.css';

import ExitIframe from "./pages/ExitIframe";
import HomePage from "./pages/index";
import NotFound from "./pages/NotFound";
import PageName from "./pages/pagename";

export default function App() {
  // code produced by vite
  const pages = {
    './pages/ExitIframe.jsx': { default: ExitIframe },
    './pages/index.jsx': { default: HomePage },
    './pages/NotFound.jsx': { default: NotFound },
    './pages/pagename.jsx': { default: PageName }    
  }
  const { t } = useTranslation();

  return (
    <PolarisProvider>
      <BrowserRouter>
        <QueryProvider>
          <NavMenu>
            <Link to="/" rel="home">Home</Link>
            <Link to="/pagename">{t("NavigationMenu.pageName")}</Link>
          </NavMenu>
          <Routes pages={pages} />
        </QueryProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}
