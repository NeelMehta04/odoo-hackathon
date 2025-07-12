import React, { useState } from "react";
import axios from "axios";
import "../styles/UserProfile.css";

const UserProfile = () => {
  const [formData, setFormData] = useState({
    location: "",
    email: "",
    contactNumber: "",
    password: "",
    imageData: null,
    skillsLearnt: [],
    skillsWannaLearn: [],
    availability: "",
    visibility: true,
  });

  const skillOptions = ["Graphic Design", "Video Editing", "PhotoShop"];
  const wantedSkillOptions = ["Python", "Java Script", "Manager"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillToggle = (type, skill) => {
    const key = type === "learnt" ? "skillsLearnt" : "skillsWannaLearn";
    setFormData((prev) => {
      const currentSkills = prev[key];
      return {
        ...prev,
        [key]: currentSkills.includes(skill)
          ? currentSkills.filter((s) => s !== skill)
          : [...currentSkills, skill],
      };
    });
  };

  const handlePhotoChange = (e) => {
    setFormData({ ...formData, imageData: e.target.files[0] });
  };

  const handleSave = async () => {
    const data = new FormData();
    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        data.append(key, JSON.stringify(formData[key]));
      } else {
        data.append(key, formData[key]);
      }
    }

    try {
      await axios.post("http://localhost:8080/api/profile", data);
      alert("Profile saved successfully!");
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Failed to save profile.");
    }
  };

  const handleDiscard = () => {
    window.location.reload();
  };

  return (
    <div className="profile-container">
      <h1>User profile</h1>
      <div className="form-grid">
        <div className="form-section">
          <label>Location</label>
          <input name="location" value={formData.location} onChange={handleInputChange} />
        </div>

        <div className="form-section">
          <label>Email</label>
          <input name="email" value={formData.email} onChange={handleInputChange} />
        </div>

        <div className="form-section">
          <label>Contact Number</label>
          <input name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} />
        </div>

        <div className="form-section">
          <label>Password</label>
          <input name="password" type="password" value={formData.password} onChange={handleInputChange} />
        </div>

        <div className="form-section">
          <label>Skills Offered</label>
          <div className="skills-box">
            {skillOptions.map((skill) => (
              <span
                key={skill}
                onClick={() => handleSkillToggle("learnt", skill)}
                className={`skill-tag ${formData.skillsLearnt.includes(skill) ? "selected" : ""}`}
              >
                {skill} ❌
              </span>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Skills Wanted</label>
          <div className="skills-box">
            {wantedSkillOptions.map((skill) => (
              <span
                key={skill}
                onClick={() => handleSkillToggle("wanted", skill)}
                className={`skill-tag ${formData.skillsWannaLearn.includes(skill) ? "selected" : ""}`}
              >
                {skill} ❌
              </span>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Availability</label>
          <input name="availability" value={formData.availability} onChange={handleInputChange} />
        </div>

        <div className="form-section">
          <label>Visibility</label>
          <select name="visibility" value={formData.visibility} onChange={(e) => setFormData({ ...formData, visibility: e.target.value === "true" })}>
            <option value="true">Public</option>
            <option value="false">Private</option>
          </select>
        </div>

        <div className="form-section">
          <label>Profile Photo</label>
          <input type="file" onChange={handlePhotoChange} />
        </div>
      </div>

      <div className="action-buttons">
        <button onClick={handleSave} className="save">Save</button>
        <button onClick={handleDiscard} className="discard">Discard</button>
      </div>
    </div>
  );
};

export default UserProfile;
