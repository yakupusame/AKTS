// src/components/AIMatching.js
import React, { useState } from 'react';
import axios from 'axios';

const AIMatching = ({ query }) => {
  const [matches, setMatches] = useState([]);

  const findMatches = async () => {
    const response = await axios.post('/api/match', { query });
    setMatches(response.data.matches);
  };

  useEffect(() => {
    findMatches();
  }, [query]);

  return (
    <div>
      {matches.map((match, index) => (
        <div key={index}>{match.name}</div>
      ))}
    </div>
  );
};

export default AIMatching;
