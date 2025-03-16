import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Donation from "./pages/Donation";
import GuideMac from "./pages/GuideMac";
import WelcomePage from "./pages/WelcomePage";
import Layout from "./components/Layout"; // مكون جديد يدير الهيدر والفوتر

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/WelcomePage/:name" element={<WelcomePage />} />
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
