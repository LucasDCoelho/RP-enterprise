// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";;
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfmaUNl1YTybLwe-Hc4loxqt5QNAUtnyU",
  authDomain: "divino-b2a36.firebaseapp.com",
  projectId: "divino-b2a36",
  storageBucket: "divino-b2a36.appspot.com",
  messagingSenderId: "193712680907",
  appId: "1:193712680907:web:75bfebca11661aa4c2104e",
  measurementId: "G-KZXLNGQB8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);