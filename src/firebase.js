import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfffNpPs1bHL8m-2WQTAoHGzczqOgcg5c",
  authDomain: "carr-218de.firebaseapp.com",
  projectId: "carr-218de",
  storageBucket: "carr-218de.appspot.com",
  messagingSenderId: "370274241151",
  appId: "1:370274241151:web:d9f1727017d7f9445ecd4a",
  measurementId: "G-KJCCJM0YDE",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
