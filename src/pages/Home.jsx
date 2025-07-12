import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RequestPopup from './Request';
import './Home.css';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUsers([
      {
        id: 1,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        skillsOffered: ['React', 'Node.js'],
        skillsWanted: ['Python'],
      },
      {
        id: 2,
        name: 'Bob Smith',
        email: 'bob@example.com',
        skillsOffered: ['Django'],
        skillsWanted: ['React', 'Vue'],
      },
    ]);
  }, []);

  const handleRequestClick = (user) => {

    setSelectedUser(user);
    setShowPopup(true);
    // const isLoggedIn = localStorage.getItem('loggedIn');
    // if (isLoggedIn === 'true') {
      
    // } else {
    //   navigate('/login');
    // }
  };

  const handleRequestSubmit = (data) => {
    console.log('Submitted request:', {
      to: selectedUser?.name,
      ...data
    });
    // TODO: Send request to backend here
  };

  const filteredUsers = users.filter((user) =>
    user.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="top-bar">
        <div className="project-name">SkillMatcher</div>
        <div className="right-controls">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>

      <div className="user-list">
        {filteredUsers.length === 0 && <p className="empty">No users found</p>}
        {filteredUsers.map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-info">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              {user.skillsOffered && (
                <p>
                  <strong>Skills Offered:</strong> {user.skillsOffered.join(', ')}
                </p>
              )}
              {user.skillsWanted && (
                <p>
                  <strong>Skills Wanted:</strong> {user.skillsWanted.join(', ')}
                </p>
              )}
            </div>
            <button className="request-btn" onClick={() => handleRequestClick(user)}>
              Request
            </button>
          </div>
        ))}
      </div>

      {/* Modal Component */}
      <RequestPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        user={selectedUser}
        onSubmit={handleRequestSubmit}
      />
    </div>
  );
}
