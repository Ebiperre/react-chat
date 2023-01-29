// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1oHLH9e05enzGzaR8eOy-frP3bC5UUg0",
  authDomain: "react-chat-3bf99.firebaseapp.com",
  projectId: "react-chat-3bf99",
  storageBucket: "react-chat-3bf99.appspot.com",
  messagingSenderId: "37170027093",
  appId: "1:37170027093:web:8d2f9c27ad6e2ea80812dc",
  measurementId: "G-85NGDE4ELM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);