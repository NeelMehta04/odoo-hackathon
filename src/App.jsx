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
