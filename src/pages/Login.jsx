import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Add this line
import '../styles/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/login?email=${email}&password=${password}`);
      const result = await response.json();

      if (result.valid) {
        setLoginStatus('Login successful!');
        // You can use useNavigate() here to redirect
      } else {
        setLoginStatus('Invalid credentials');
      }

    } catch (error) {
      console.error('Login failed:', error);
      setLoginStatus('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
        <button type="submit">Log In</button>
        {loginStatus && <p>{loginStatus}</p>}

        {/* ✅ Use Link instead of <a> */}
        <p className="signup-text">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
