// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZigj6YoZcfPFJJDYHtUPJ4-4UM0uWH28",
  authDomain: "phone-754d4.firebaseapp.com",
  projectId: "phone-754d4",
  storageBucket: "phone-754d4.appspot.com",
  messagingSenderId: "174802182521",
  appId: "1:174802182521:web:b1fe3e6d836f788c0d4fa8",
  measurementId: "G-W23XZVP27G",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
