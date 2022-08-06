import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/SobreMi" element={<AboutMe/>} />
        <Route path="/Portfolio" element={<Portfolio/>} />
        <Route path="/Contacto" element={<Contact/>} />
      </Routes>
    </Router>
  )
}

export default App