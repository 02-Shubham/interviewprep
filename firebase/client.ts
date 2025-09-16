// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRyh4YrjlE6SLes0WgpcolrUfwYYpQ8pg",
  authDomain: "interviewprep-ea245.firebaseapp.com",
  projectId: "interviewprep-ea245",
  storageBucket: "interviewprep-ea245.firebasestorage.app",
  messagingSenderId: "590903319137",
  appId: "1:590903319137:web:97c096dd2b34be4cee6820",
  measurementId: "G-V60Q3PCPMB",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
