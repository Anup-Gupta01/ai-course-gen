// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "web-develpoment-a802f.firebaseapp.com",
  projectId: "web-develpoment-a802f",
  storageBucket: "web-develpoment-a802f.firebasestorage.app",
  messagingSenderId: "880750704107",
  appId: "1:880750704107:web:a86366e5503d9d394055ae",
  measurementId: "G-95TKQ0H00R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage =getStorage(app)