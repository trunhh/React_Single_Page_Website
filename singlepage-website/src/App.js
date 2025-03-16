import React from "react";
import GlobalStyle from "./GlobalStyles"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./compoents/Navbar";
import Home from "./Pages/HomePage/Home";
import Footer from "./compoents/Footer";
import ScrollToTop from "./compoents/ScrollToTop";
import Header from "./compoents/Header";
import CheckOut from "./Pages/CheckOut/CheckOut";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/check-out" element={<CheckOut/>} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
