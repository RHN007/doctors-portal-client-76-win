// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3wyXDKmRP6vIr2oTBQmRryvuIFT0bCdY",
  authDomain: "doctors-portal-1fa5c.firebaseapp.com",
  projectId: "doctors-portal-1fa5c",
  storageBucket: "doctors-portal-1fa5c.appspot.com",
  messagingSenderId: "4167066775",
  appId: "1:4167066775:web:a9c17974f5785b5eb075d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;