<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request" element={<Request />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
=======
import { Routes, Route } from 'react-router-dom';
import ProfileCard from './Components/ProfileCard';

function App() {
  return (
    <Routes>
      {/* Default route shows ProfileCard since it's based on auth */}
      <Route path="/profile" element={<ProfileCard />} />

      {/* Add more routes here like /login or /dashboard if needed */}
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
}

export default App;
>>>>>>> fcfc6b4449570cf2c6f27931665d6887741a8c12
