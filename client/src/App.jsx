import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import VinLookup from "./VinLookup";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <VinLookup />
      </Router>
      <Footer />
    </>
  );
};

export default App;
