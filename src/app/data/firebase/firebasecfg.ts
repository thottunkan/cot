// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAobeNDQXOnbydL5D6Uh6_EE6oNKqJKtTI",
  authDomain: "chekonoftravancore.firebaseapp.com",
  projectId: "chekonoftravancore",
  storageBucket: "chekonoftravancore.appspot.com",
  messagingSenderId: "656080923505",
  appId: "1:656080923505:web:516325cf61e7854c0964d0",
  measurementId: "G-BF8Q7KJ4CH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);