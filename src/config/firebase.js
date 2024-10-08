// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJekwf6neJZp7RacaV_o1P8tqhr2HLLpw",
  authDomain: "baansaat-af46e.firebaseapp.com",
  projectId: "baansaat-af46e",
  storageBucket: "baansaat-af46e.appspot.com",
  messagingSenderId: "1093462346618",
  appId: "1:1093462346618:web:9f574287447fff6a74e4c3",
  measurementId: "G-EVQHBZ2X5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);