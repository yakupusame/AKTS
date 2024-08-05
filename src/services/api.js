// src/services/api.js

const API_URL = 'http://localhost:5000/api';

export const addProfile = async (profile) => {
  const response = await fetch(`${API_URL}/profiles/addProfile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  });
  return response.json();
};

export const searchProfiles = async (query) => {
  const response = await fetch(`${API_URL}/profiles/search?query=${query}`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const profiles = await response.json();
  return profiles;
};
