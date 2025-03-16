import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../pages/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Donation from "../pages/Donation";
import GuideMac from "../pages/GuideMac";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname.startsWith("/WelcomePage");

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/guideMac" element={<GuideMac />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default Layout;
