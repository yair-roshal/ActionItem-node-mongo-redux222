import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HistoryScreen = () => {
  const navigate = useNavigate();
  const savedProfiles = useSelector((state) => state.people.savedProfiles);

  const handleProfileClick = (id) => {
    navigate(`/profile/${id}`);
  };

  return (
    <div>
      <h1>History Screen</h1>
      {savedProfiles.map((profile) => (
        <div key={profile.id} onClick={() => handleProfileClick(profile.id)}>
          <h3>{profile.name}</h3>
          <p>{profile.email}</p>
        </div>
      ))}
    </div>
  );
};

export default HistoryScreen;
