
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5WgiqZIJIGtAFo5sD30KDHN0OnLSN2XY",
  authDomain: "ecomm-dff12.firebaseapp.com",
  projectId: "ecomm-dff12",
  storageBucket: "ecomm-dff12.appspot.com",
  messagingSenderId: "349772401130",
  appId: "1:349772401130:web:1ed56b43f47f66b48fca93",
  measurementId: "G-MW19YSDM3N"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
  