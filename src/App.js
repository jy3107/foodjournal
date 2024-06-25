import { useEffect, useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Journal from "./pages/journal";


const App = () => {
  return (
    
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </Router>
  );
}

export default App;