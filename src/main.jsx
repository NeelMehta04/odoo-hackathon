import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import App from './App.jsx';
import './index.css'; // <- this line is important

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
=======
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css'; // Optional: your global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>> fcfc6b4449570cf2c6f27931665d6887741a8c12
  </React.StrictMode>
);
