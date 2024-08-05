// src/components/AddProfile.js

import React, { useState } from 'react';
import { addProfile } from '../services/api';

const AddProfile = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const profile = { name, bio };
    const response = await addProfile(profile);
    console.log('Profile added:', response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <button type="submit">Add Profile</button>
    </form>
  );
};

export default AddProfile;
