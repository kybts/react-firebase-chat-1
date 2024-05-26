import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-8efdb.firebaseapp.com",
  projectId: "reactchat-8efdb",
  storageBucket: "reactchat-8efdb.appspot.com",
  messagingSenderId: "418095921218",
  appId: "1:418095921218:web:aedd0f45ae0b20b13215db"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()