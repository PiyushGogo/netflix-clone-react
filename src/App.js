import React from "react";
import { Routes, Route } from "react-router-dom";

// pages import
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
