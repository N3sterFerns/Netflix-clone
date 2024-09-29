// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEFAn2WkOtVOdF31hNL35NOCt7YKdx8fA",
  authDomain: "netflix-clone-c516b.firebaseapp.com",
  projectId: "netflix-clone-c516b",
  storageBucket: "netflix-clone-c516b.appspot.com",
  messagingSenderId: "832613757543",
  appId: "1:832613757543:web:3b2aa59a372f64f0025ac2",
  measurementId: "G-1V5BZDPMQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()