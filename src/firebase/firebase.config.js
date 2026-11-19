import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDN7e4UnTUNjNr06XwQ-5MUJaD5bhfuqsU",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "learning-authentication-55c57.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "learning-authentication-55c57",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "learning-authentication-55c57.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "447140610326",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:447140610326:web:1d3674e71f19d7a73f9037"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
