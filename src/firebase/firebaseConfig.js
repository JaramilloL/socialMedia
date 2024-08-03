// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0g2DrQEoRIMxFlCl6Lv4ZAkrggpQ9xUA",
  authDomain: "loginmui-48bee.firebaseapp.com",
  databaseURL: "https://loginmui-48bee-default-rtdb.firebaseio.com",
  projectId: "loginmui-48bee",
  storageBucket: "loginmui-48bee.appspot.com",
  messagingSenderId: "122070463686",
  appId: "1:122070463686:web:8aa30467eaaeb85091d3c7",
  measurementId: "G-X6H0ENGZRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);