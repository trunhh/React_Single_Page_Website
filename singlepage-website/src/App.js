import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./compoents/Navbar";
import Home from "./Pages/Home";
import ScrollToTop from "./Utillities/ScrollToTop";
import CheckOut from "./Pages/CheckOut";
import LoadingOverlay from "./compoents/LoadingOverlay";
import "./App.css"

import "bootstrap/dist/css/bootstrap.min.css";
import "./styling/coloring.css"
function App() {

  

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <LoadingOverlay />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/check-out" element={<CheckOut/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
