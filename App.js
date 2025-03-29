import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import ForgotPassword from "./components/Forgotpassword";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Logout from "./components/Logout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("loggedIn") === "true");

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("loggedIn") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={isLoggedIn ? <Navigate to="/" /> : <Signup />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
