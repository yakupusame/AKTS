// src/hooks/useAuth.js
import { useState, useEffect } from 'react';
import { auth } from '../firebase'; // Import auth from firebase
import { onAuthStateChanged } from 'firebase/auth';

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return user;
};

export default useAuth;
