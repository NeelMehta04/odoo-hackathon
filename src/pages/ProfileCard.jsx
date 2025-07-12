import { useEffect, useState } from 'react';
import "../styles/profile.css";

const ProfileCard = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Dummy data until backend is ready
    setProfile({
      name: "Marc Demo",
      photoUrl: "https://dummyimage.com/100x100/000/fff&text=M",
      skillsOffered: ["Java", "Spring Boot"],
      skillsWanted: ["React", "UI Design"],
      feedback: "Very knowledgeable and helpful!"
    });

    // fetch('http://localhost:8080/api/profile')
    //   .then(response => response.json())
    //   .then(data => setProfile(data))
    //   .catch(error => console.error('Error fetching profile:', error));
  }, []);

  if (!profile) return <div className="profile-container">Loading...</div>;

  return (
  <div className="profile-container">
    <div className="profile-info">
    <button className="request-btn">Request</button>

    <h1>Marc Demo</h1>

    <p><strong>Skills Offered:</strong></p>
    <ul>
      <li>Java</li>
      <li>Spring Boot</li>
    </ul>

    <p><strong>Skills Wanted:</strong></p>
    <ul>
      <li>React</li>
      <li>UI Design</li>
    </ul>

    <p><strong>Rating and Feedback:</strong></p>
    <p>Very knowledgeable and helpful!</p>
  </div>

  <div className="profile-photo-wrapper">
    <img src={profile.photoUrl} alt="Profile" className="profile-photo" />
  </div>

</div>

);

};

export default ProfileCard;
