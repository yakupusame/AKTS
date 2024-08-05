// src/components/VerificationReminder.js
import React from 'react';
import { auth } from '../firebase';
import { sendEmailVerification } from 'firebase/auth';

const VerificationReminder = () => {
  const resendVerificationEmail = async () => {
    if (auth.currentUser) {
      await sendEmailVerification(auth.currentUser);
      alert('Verification email sent. Please check your inbox.');
    }
  };

  return (
    <div>
      <h1>Email Verification Required</h1>
      <p>Please verify your email address to access this feature.</p>
      <button onClick={resendVerificationEmail}>Resend Verification Email</button>
    </div>
  );
};

export default VerificationReminder;
