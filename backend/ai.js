// backend/ai.js
const natural = require('natural');
const { JaroWinklerDistance } = natural;

// Basic AI-based matching function
const findBestMatch = (profiles, searchTerm) => {
  return profiles
    .map(profile => ({
      ...profile.toObject(),
      score: JaroWinklerDistance(profile.bio.toLowerCase(), searchTerm)
    }))
    .sort((a, b) => b.score - a.score); // Sort profiles by score in descending order
};

module.exports = { findBestMatch };
