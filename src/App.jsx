import React from "react";
import Navbar from "./component/Header";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/index";
import ErorPage from "./pages/ErorPage/ErorPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Shop />}/>
      <Route path="*" element={<ErorPage />}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
