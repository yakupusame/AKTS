// src/components/Match.js
import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase'; // Adjust the import path
import { collection, getDocs } from 'firebase/firestore';

const Match = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const matchesCollection = collection(firestore, 'matches');
      const matchesSnapshot = await getDocs(matchesCollection);
      const matchesList = matchesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMatches(matchesList);
    };

    fetchMatches();
  }, []);

  return (
    <div>
      <h2>Matches</h2>
      <ul>
        {matches.map(match => (
          <li key={match.id}>{match.name}</li> // Assuming each match document has a 'name' field
        ))}
      </ul>
    </div>
  );
};

export default Match;
