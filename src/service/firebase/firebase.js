// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBT-666YaYAGlv8fPbea-TyRCP_qAtguAs",
  authDomain: "react-login-5efa4.firebaseapp.com",
  projectId: "react-login-5efa4",
  storageBucket: "react-login-5efa4.firebasestorage.app",
  messagingSenderId: "96066047353",
  appId: "1:96066047353:web:83e32794291b63097133a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };