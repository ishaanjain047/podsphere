import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArjPBm3TWsy56hSr2ia9_fZRfqhAaG7d4",
  authDomain: "podsphere-songs.firebaseapp.com",
  projectId: "podsphere-songs",
  storageBucket: "podsphere-songs.appspot.com",
  messagingSenderId: "139956477305",
  appId: "1:139956477305:web:291e0d957e01677c9d23a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
