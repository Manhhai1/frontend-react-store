
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataProvider } from './GlobalState';
import Home from './mainpage/Home';
import Login from './account/Login';
import Signup from './account/Signup';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home />} />
      </Routes>
      <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
      <Routes>
        <Route  path="/login" element={<Login />} />
      </Routes>
      <Routes>
      <Route  path="/signup" element={<Signup />} />
    </Routes>
    </Router>
  );
}

export default App;
