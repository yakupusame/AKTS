// src/components/SearchProfiles.js

import React, { useState } from 'react';
import { searchProfiles } from '../services/api';

const SearchProfiles = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await searchProfiles(query);
    setResults(response);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {results.map((profile) => (
          <div key={profile._id}>
            <h2>{profile.name}</h2>
            <p>{profile.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchProfiles;
