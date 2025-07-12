import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import RequestPopup from './pages/Request'; 
import UserProfile from './pages/Signup';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/request" element={<RequestPopup />} />
        <Route path="/signup" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}
