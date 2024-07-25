// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyTLbjr_zPbHcwAbl3AjaJbunNv6NXXyY",
  authDomain: "akts-ff44e.firebaseapp.com",
  projectId: "akts-ff44e",
  storageBucket: "akts-ff44e.appspot.com",
  messagingSenderId: "1078820090682",
  appId: "1:1078820090682:web:547406579e7062f5fb9603",
  measurementId: "G-TV8RK6W40F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
