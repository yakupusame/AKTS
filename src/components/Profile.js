// src/components/Profile.js
import React, { useState } from 'react';
import { auth } from '../firebase';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    expertise: '',
    bio: '',
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const user = auth.currentUser;
    if (user) {
      // Save profile data to your backend or Firebase Firestore
    }
  };

  return (
    <div>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="expertise" placeholder="Expertise" onChange={handleChange} />
      <textarea name="bio" placeholder="Bio" onChange={handleChange}></textarea>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Profile;
