import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RaiseComplaint from "./pages/RaiseComplaint";
import AllComplaints from "./pages/AllComplaints";
import PrivateComponent from "./components/PrivateComponent";
import SingleComplaint from "./pages/SingleComplaint";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/car" element={<PrivateComponent />}>
          <Route path="raise-complaint" element={<RaiseComplaint />} />
          <Route path="all-complaints" element={<AllComplaints />} />
          <Route path="complaint/:id" element={<SingleComplaint />} />
        </Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </Router>
  );
};

export default App;
