import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RaiseComplaint from "./pages/RaiseComplaint";
import AllComplaints from "./pages/AllComplaints";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/raise-complaint" element={<RaiseComplaint />} />
        <Route path="/all-complaints" element={<AllComplaints />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
