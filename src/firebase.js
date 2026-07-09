import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAP8lh_Z46WLasEg8lhgysRsCC4S975lAk",
  authDomain: "nexora-70d85.firebaseapp.com",
  projectId: "nexora-70d85",
  storageBucket: "nexora-70d85.firebasestorage.app",
  messagingSenderId: "1002632572203",
  appId: "1:1002632572203:web:aadf523b82bc80b961696e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);