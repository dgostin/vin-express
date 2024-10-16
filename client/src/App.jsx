import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VinLookup from "./VinLookup";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<VinLookup />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
