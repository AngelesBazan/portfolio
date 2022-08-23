import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Portafolio from "./pages/Portafolio";
import Contact from "./pages/Contact";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/SobreMi" element={<AboutMe/>} />
        <Route path="/Portafolio" element={<Portafolio/>} />
        <Route path="/Contacto" element={<Contact/>} />
      </Routes>
    </Router>
  )
}

export default App