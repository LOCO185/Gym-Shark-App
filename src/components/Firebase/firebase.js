import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLb83vvuNn4kUMxcd0uzhrldX3-Tltn5k",
  authDomain: "fitness-app-auth.firebaseapp.com",
  projectId: "fitness-app-auth",
  storageBucket: "fitness-app-auth.appspot.com",
  messagingSenderId: "356564603771",
  appId: "1:356564603771:web:58f96d7ad5eb184f86a3de",
  measurementId: "G-5D8M156YK8",
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// console.log(firebaseConfig);
// console.log(process.env.REACT_APP_FIREBASE_API_KEY);

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
