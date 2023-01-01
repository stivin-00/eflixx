// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQd9hnhYrScHEYUee-SXxNGOb0fm7uu0M",
  authDomain: "eflix-d7c15.firebaseapp.com",
  projectId: "eflix-d7c15",
  storageBucket: "eflix-d7c15.appspot.com",
  messagingSenderId: "949020313966",
  appId: "1:949020313966:web:da36f5ff107a317313597f",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
