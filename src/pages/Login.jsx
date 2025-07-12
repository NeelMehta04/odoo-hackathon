import React, { useState } from 'react';
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
        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
