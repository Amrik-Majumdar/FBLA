import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase Web App Configuration - REAL PROJECT
// Use environment variables in production, fallback to hardcoded values for development
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY || "AIzaSyDw_gHMWOChbbhjVsVhYIDOqPbw1jN52ZE",
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN || "fbla-connect-83a9e.firebaseapp.com",
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID || "fbla-connect-83a9e",
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET || "fbla-connect-83a9e.firebasestorage.app",
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "227121840665",
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID || "1:227121840665:web:4701dc21a4a5f81d30a088",
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-5QC4D0Z685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
