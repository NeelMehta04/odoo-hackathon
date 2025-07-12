import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    location: '',
    email: '',
    contactNumber: '',
    password: '',
    profilePic: null,
    visibility: 'true',
    skillsOffered: '',
    skillsWanted: '',
  });

  const [signupStatus, setSignupStatus] = useState('');

  const skillOptions = [
    'Graphic Design',
    'Video Editing',
    'Photoshop',
    'Python',
    'JavaScript',
    'Project Management',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, profilePic: e.target.files[0] }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      const response = await fetch('http://localhost:8080/api/signup', {
        method: 'POST',
        body: data,
      });
      const result = await response.json();

      if (result.success) {
        setSignupStatus('Signup successful!');
      } else {
        setSignupStatus('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setSignupStatus('Signup failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSignup}>
        <h2>Sign Up</h2>

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleInputChange}
          required
        />
        <label>Profile Picture: </label>
        <input
          type="file"
          name="profilePic"
          onChange={handleFileChange}
          accept="image/*"
          required
        />

        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleInputChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />

        <select
          name="skillsOffered"
          value={formData.skillsOffered}
          onChange={handleInputChange}
          required
          style={{ padding: '12px', borderRadius: '8px', fontSize: '16px' }}
        >
          <option value="">Select a Skill You Offer</option>
          {skillOptions.map(skill => (
            <option key={skill} value={skill}>{skill}</option>
          ))}
        </select>

        <select
          name="skillsWanted"
          value={formData.skillsWanted}
          onChange={handleInputChange}
          required
          style={{ padding: '12px', borderRadius: '8px', fontSize: '16px' }}
        >
          <option value="">Select a Skill You Want</option>
          {skillOptions.map(skill => (
            <option key={skill} value={skill}>{skill}</option>
          ))}
        </select>
        <label>Visibility: </label>
        <select
          name="visibility"
          value={formData.visibility}
          onChange={handleInputChange}
          required
          style={{ padding: '12px', borderRadius: '8px', fontSize: '16px' }}
        >
          <option value="true">Public</option>
          <option value="false">Private</option>
        </select>

        <button type="submit">Sign Up</button>

        {signupStatus && <p>{signupStatus}</p>}

        <p className="signup-text">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
