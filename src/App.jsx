import React from "react";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from "./pages/Create";
import Card from "./pages/Card";

import { useState } from "react";

// const info = "";

function App() {
  const [info,setInfo] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home info={info} setInfo={setInfo}/>} />
        <Route path="/new" element={<Create info={info} setInfo={setInfo} />}/>
        <Route path="/card/:id" element={<Card info={info} setInfo={setInfo} />}/>
      </Routes>
    </Router>
  );
}

export default App;
