import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { saveProfile, deleteProfile, updateProfileName } from '../actions/peopleActions';

const ProfileScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const profiles = useSelector((state) => state.people.profiles);
  const savedProfiles = useSelector((state) => state.people.savedProfiles);

  const [name, setName] = useState('');

  const profile = profiles.find((p) => p.id === id);
  const isSaved = savedProfiles.some((p) => p.id === id);

  const handleSaveClick = () => {
    dispatch(saveProfile(profile));
  };

  const handleDeleteClick = () => {
    dispatch(deleteProfile(id));
  };

  const handleUpdateClick = () => {
    dispatch(updateProfileName(id, name));
    if (!isSaved) {
      const updatedProfile = { ...profile, name };
      dispatch(saveProfile(updatedProfile));
    }
  };

  const handleBackClick = () => {
    history.goBack();
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile Screen</h1>
      <img src={profile.picture.large} alt={profile.name} />
      <h2>{profile.name}</h2>
      <p>{profile.email}</p>
      <p>{profile.gender}</p>
      <p>{profile.location.country}</p>
      <p>{profile.phone}</p>

      <div>
        <input type="text" value={name} onChange={handleNameChange} />
        <button onClick={handleUpdateClick}>Update</button>
      </div>

      <button onClick={handleSaveClick} disabled={isSaved}>
        Save
      </button>
      <button onClick={handleDeleteClick} disabled={!isSaved}>
        Delete
      </button>
      <button onClick={handleBackClick}>Back</button>
    </div>
  );
};

export default ProfileScreen;
