// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_5kFdV3CMpSIE8PMNeh_9fchOxDcGJiY",
  authDomain: "landing-project-ddb3e.firebaseapp.com",
  projectId: "landing-project-ddb3e",
  storageBucket: "landing-project-ddb3e.appspot.com",
  messagingSenderId: "567018718287",
  appId: "1:567018718287:web:3d674a2916f40a17f8563a",
  measurementId: "G-4C8K1BV21W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);