// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA_c40hKzdpPp6v0MetoiSOG2SB_EMHg0",
  authDomain: "communicate-b4d6d.firebaseapp.com",
  projectId: "communicate-b4d6d",
  storageBucket: "communicate-b4d6d.firebasestorage.app",
  messagingSenderId: "1007912426743",
  appId: "1:1007912426743:web:296b72a5747c19176087f2",
  measurementId: "G-8900ZEW0YL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };