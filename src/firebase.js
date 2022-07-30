// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_sAXspdKIOKSVwf7KzmeWUe1f52QkxDg",
  authDomain: "netflix-4b9bf.firebaseapp.com",
  projectId: "netflix-4b9bf",
  storageBucket: "netflix-4b9bf.appspot.com",
  messagingSenderId: "726832721185",
  appId: "1:726832721185:web:893d9ead95ea0088cda260"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)