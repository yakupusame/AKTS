import { initializeApp } from 'firebase/app';

const firebaseConfig = {  
  apiKey: 'AIzaSyAyTLbjr_zPbHcwAbl3AjaJbunNv6NXXyY', // Leave empty or null if not available
  authDomain: '',
  projectId: 'akts-ff44e',
  storageBucket: '', // Leave empty if not available
  messagingSenderId: '',
  appId: '', // Leave empty if not available
};

export const app = initializeApp(firebaseConfig);