import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import ProfileCard from './Components/ProfileCard';
import Signup from './Components/Signup'; // 👈 Add this line

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} /> {/* 👈 New Signup route */}
      <Route path="/profile" element={<ProfileCard />} />
    </Routes>
  );
}

export default App;
