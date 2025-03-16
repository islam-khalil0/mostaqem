import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Invitation from "./pages/Invitation";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Invitation/android/beta/:name" element={<Invitation />} />
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
