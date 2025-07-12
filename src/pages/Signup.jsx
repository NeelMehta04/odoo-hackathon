import React, { useState } from 'react';
import '../styles/auth.css'; // Adjust the path if needed

export default function UserProfile() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    skillsLearnt: [],
    skillsWannaLearn: [],
    imageData: null,
    visibility: true,
  });

  const skillOptions = ['React', 'Node', 'Python', 'Design', 'JavaScript', 'Manager'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSkillToggle = (type, skill) => {
    const key = type === 'learnt' ? 'skillsLearnt' : 'skillsWannaLearn';
    setFormData(prev => {
      const current = prev[key];
      const updated = current.includes(skill)
        ? current.filter(s => s !== skill)
        : [...current, skill];
      return { ...prev, [key]: updated };
    });
  };

  const handleImageChange = (e) => {
    setFormData(prev => ({
      ...prev,
      imageData: e.target.files[0]
    }));
  };

  const handleVisibilityChange = (e) => {
    setFormData(prev => ({
      ...prev,
      visibility: e.target.value === 'true'
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // TODO: Add backend call here

    alert('Signup Successful!');
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          name="contactNumber"
          type="tel"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />

        <label>Select Skills You Have:</label>
        <div className="skill-list">
          {skillOptions.map((skill) => (
            <span
              key={`learnt-${skill}`}
              className={`skill-tag ${formData.skillsLearnt.includes(skill) ? 'selected' : ''}`}
              onClick={() => handleSkillToggle('learnt', skill)}
            >
              {skill}
            </span>
          ))}
        </div>

        <label>Select Skills You Want to Learn:</label>
        <div className="skill-list">
          {skillOptions.map((skill) => (
            <span
              key={`wanna-${skill}`}
              className={`skill-tag ${formData.skillsWannaLearn.includes(skill) ? 'selected' : ''}`}
              onClick={() => handleSkillToggle('wanna', skill)}
            >
              {skill}
            </span>
          ))}
        </div>

        <label>Upload Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />

        {formData.imageData && (
          <img
            src={URL.createObjectURL(formData.imageData)}
            alt="Preview"
            style={{ width: '100px', height: '100px', objectFit: 'cover', marginTop: '10px' }}
          />
        )}

        <label>Profile Status: </label>
        <select value={formData.visibility ? 'true' : 'false'} onChange={handleVisibilityChange}>
          <option value="true">Public</option>
          <option value="false">Private</option>
        </select>

        <button type="submit">Sign Up</button>

        <p className="signup-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}
