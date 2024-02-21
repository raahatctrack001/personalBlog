// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "personalblog-42b56.firebaseapp.com",
  projectId: "personalblog-42b56",
  storageBucket: "personalblog-42b56.appspot.com",
  messagingSenderId: "870517374513",
  appId: "1:870517374513:web:bf8ddab4da573b204c1f10",
  measurementId: "G-FTNVB6NF5R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);