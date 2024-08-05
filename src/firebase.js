import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { getDatabase, ref, set, get, child } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyTLbjr_zPbHcwAbl3AjaJbunNv6NXXyY",
  authDomain: "akts-ff44e.firebaseapp.com",
  projectId: "akts-ff44e",
  storageBucket: "akts-ff44e.appspot.com",
  messagingSenderId: "1078820090682",
  appId: "1:1078820090682:web:547406579e7062f5fb9603",
  measurementId: "G-TV8RK6W40F",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, ref, set, get, child };