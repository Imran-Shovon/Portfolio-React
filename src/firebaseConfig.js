import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAbNxHzKYRA3kKZO9MGNEgQIrfA0AKCIrg",
  authDomain: "portfolio-5c39f.firebaseapp.com",
  databaseURL: "https://portfolio-5c39f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-5c39f",
  storageBucket: "portfolio-5c39f.firebasestorage.app",
  messagingSenderId: "1024168875907",
  appId: "1:1024168875907:web:0070fea9fa73c5564c88b6",
  measurementId: "G-5ZTPQW77LY"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db };

