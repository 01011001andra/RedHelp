import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUmsfkCOReNPwOOpUNi38MSsCht27ve3U",
  authDomain: "redhelp-65f27.firebaseapp.com",
  projectId: "redhelp-65f27",
  storageBucket: "redhelp-65f27.appspot.com",
  messagingSenderId: "265963860588",
  appId: "1:265963860588:web:8a4fdc321e1fda42fdde49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);