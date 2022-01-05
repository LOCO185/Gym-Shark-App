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
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
