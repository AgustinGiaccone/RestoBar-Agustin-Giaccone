// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2UXZsFal2FJ2yj6ZZ57T3g1cLP-npQrY",
  authDomain: "proyecto-reactjs-coderho-2e717.firebaseapp.com",
  projectId: "proyecto-reactjs-coderho-2e717",
  storageBucket: "proyecto-reactjs-coderho-2e717.appspot.com",
  messagingSenderId: "209097836074",
  appId: "1:209097836074:web:4d7cb1b306caf47d76a553"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// base de datos

export const db = getFirestore(app)