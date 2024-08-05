import React, { useEffect, useState } from 'react';
import { auth, db, ref, get, set, child } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Profile = () => {
  const [user] = useAuthState(auth);
  const [profile, setProfile] = useState({
    email: '',
    bio: '',
    firstName: '',
    lastName: '',
    age: ''
  });
  const [bio, setBio] = useState(profile.bio);
  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [age, setAge] = useState(profile.age);

  useEffect(() => {
    if (user) {
      const fetchProfile = async () => {
        try {
          const dbRef = ref(db);
          const snapshot = await get(child(dbRef, `users/${user.uid}`));
          if (snapshot.exists()) {
            const data = snapshot.val();
            setProfile(data);
            setBio(data.bio || '');
            setFirstName(data.firstName || '');
            setLastName(data.lastName || '');
            setAge(data.age || '');
          } else {
            console.log("No data available");
          }
        } catch (error) {
          console.error("Error fetching profile: ", error);
        }
      };

      fetchProfile();
    }
  }, [user]);

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    if (user) {
      try {
        await set(ref(db, `users/${user.uid}`), {
          email: profile.email,
          bio,
          firstName,
          lastName,
          age
        });
        alert('Profile updated successfully!');
      } catch (error) {
        console.error("Error updating profile: ", error);
        alert('Failed to update profile: ' + error.message);
      }
    }
  };

  if (!user) {
    return <div>Please sign in</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {profile.email}</p>
      <p>Verified: {profile.verified ? 'Yes' : 'No'}</p>
      <p>First Name: {profile.firstName || 'Not provided'}</p>
      <p>Last Name: {profile.lastName || 'Not provided'}</p>
      <p>Age: {profile.age || 'Not provided'}</p>
      <p>Bio: {profile.bio || 'Not provided'}</p>
      <form onSubmit={handleUpdateProfile}>
        <div>
          <label>Bio:</label>
          <textarea
            value={bio}
            onChange={handleBioChange}
            placeholder="Enter your bio"
            autoComplete="off"
          />
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            autoComplete="given-name"
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            autoComplete="family-name"
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={handleAgeChange}
            autoComplete="bday"
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
