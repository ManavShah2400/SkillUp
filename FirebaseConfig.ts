// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR9FzCy-tYzp0a2AoOa3xJKmGtw6LptH0",
  authDomain: "skillup-14263.firebaseapp.com",
  projectId: "skillup-14263",
  storageBucket: "skillup-14263.firebasestorage.app",
  messagingSenderId: "516104773901",
  appId: "1:516104773901:web:9214a0f407e8cfbaa59044",
  measurementId: "G-GP07BMKL5W"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const analytics = getAnalytics(FIREBASE_APP);
export const FIREBASE_STORE = getFirestore(FIREBASE_APP)