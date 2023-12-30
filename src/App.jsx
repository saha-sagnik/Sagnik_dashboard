import React from "react";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from "./pages/Create";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<Create/>}/>
      </Routes>
    </Router>
  );
}

export default App;
