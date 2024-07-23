// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import { firestore } from './firebase'; // Adjust the import path
import { doc, getDoc } from 'firebase/firestore';
import { auth } from './firebase'; // Ensure auth is imported if you need the current user's UID

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (auth.currentUser) {
        const profileDoc = doc(firestore, 'profiles', auth.currentUser.uid);
        const profileSnapshot = await getDoc(profileDoc);
        if (profileSnapshot.exists()) {
          setProfile(profileSnapshot.data());
        } else {
          console.log('No such document!');
        }
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {profile ? (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          {/* Display other profile information as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
