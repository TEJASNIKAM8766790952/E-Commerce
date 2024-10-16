import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Import BrowserRouter
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Error from "./Pages/Error";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div className="App">
      {/* Wrap Routes inside Router */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
