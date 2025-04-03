import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpXKNaLyssxY1yNa9y76zE9QWLAlbrAgM",
  authDomain: "prepme-5fa35.firebaseapp.com",
  projectId: "prepme-5fa35",
  storageBucket: "prepme-5fa35.firebasestorage.app",
  messagingSenderId: "176902163880",
  appId: "1:176902163880:web:8591c34578cf2ac551a19d",
  measurementId: "G-CH8DB0X1L3",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
