import React, { useState } from 'react';
import { searchProfiles } from './services/api';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const profiles = await searchProfiles(query);
      setResults(profiles);
      setError(null);
    } catch (err) {
      console.error('Error searching profiles:', err);
      setError('An error occurred while searching. Please try again.');
      setResults([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a profile..."
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>{error}</p>}

      <ul>
        {results.map((profile) => (
          <li key={profile._id}>{profile.name} - {profile.bio}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
