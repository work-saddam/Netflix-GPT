// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtCK-yyzTq8wN9ibwsld-Bo14M4M905hE",
  authDomain: "netflix-gpt-fdf41.firebaseapp.com",
  projectId: "netflix-gpt-fdf41",
  storageBucket: "netflix-gpt-fdf41.firebasestorage.app",
  messagingSenderId: "39983525143",
  appId: "1:39983525143:web:b224ec2b3eff7f06d21b52",
  measurementId: "G-EYDTFMW6XL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);