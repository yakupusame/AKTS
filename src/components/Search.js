// src/components/Search.js
import React, { useState } from 'react';

const Search = ({ profiles }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    // For simplicity, we'll filter profiles that match the query
    const results = profiles.filter((profile) =>
      profile.expertise.toLowerCase().includes(query.toLowerCase())
    );
    // Show the results to the user
  };

  return (
    <div>
      <input
        placeholder="Search for expertise"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
