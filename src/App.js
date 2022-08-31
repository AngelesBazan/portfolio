import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Portafolio from "./pages/Portafolio";
import Contact from "./pages/Contact";
import "./App.css";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/SobreMi" element={<AboutMe/>} />
        <Route path="/Portafolio" element={<Portafolio/>} />
        <Route path="/Contacto" element={<Contact/>} />
      </Routes>
    </HashRouter>
  )
}

export default App