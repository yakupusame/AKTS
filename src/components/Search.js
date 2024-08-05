import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: searchTerm })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error searching profiles:', error);
      setError('An error occurred while searching. Please try again.');
    }
  };

  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by keyword"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      <ul>
        {results.length > 0 ? (
          results.map((result, index) => (
            <li key={index}>{result.firstName} {result.lastName} - {result.bio}</li>
          ))
        ) : (
          <p>No results found</p>
        )}
      </ul>
    </div>
  );
};

export default Search;
