import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import LeetCode from './pages/LeetCode';
import LeetCodeProblems from './pages/LeetCodeProblems';
import LeetCodeVideo from './pages/LeetCodeVideo';
import Profile from './pages/Profile';
import AppNavbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes> 
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/leetcode" element={<LeetCode />} />
        <Route path="/leetcode-problems" element={<LeetCodeProblems />} />
        <Route path="/leetcode-video/:problemId" element={<LeetCodeVideo />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
