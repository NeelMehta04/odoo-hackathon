// RequestPopup.jsx
import React, { useState } from 'react';
import '../styles/request.css';

const RequestPopup = ({ isOpen, onClose, user, onSubmit }) => {
  const [offeredSkill, setOfferedSkill] = useState('');
  const [wantedSkill, setWantedSkill] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ offeredSkill, wantedSkill, message });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Send Skill Swap Request to {user?.name}</h2>
        <form onSubmit={handleSubmit}>
          <label>Choose one of your offered skills</label>
          <select value={offeredSkill} onChange={(e) => setOfferedSkill(e.target.value)} required>
            <option value="">Select skill</option>
            <option value="React">React</option>
            <option value="Node">Node</option>
            <option value="Design">Design</option>
          </select>

          <label>Choose one of their wanted skills</label>
          <select value={wantedSkill} onChange={(e) => setWantedSkill(e.target.value)} required>
            <option value="">Select skill</option>
            <option value="Python">Python</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Manager">Manager</option>
          </select>

          <label>Message</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="4" required />

          <button type="submit">Submit</button>
        </form>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default RequestPopup;