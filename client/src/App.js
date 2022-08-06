import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Student from "./components/student/Student";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
// import { useState } from 'react';
// kmlkmlml;
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/profile/:id" element={<Student />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
