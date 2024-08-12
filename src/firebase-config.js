// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from 'firebase/auth' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpj6YpO6rXIDLrNkdmNVgV3J5xpM-mulE",
  authDomain: "blog-project-3c3aa.firebaseapp.com",
  projectId: "blog-project-3c3aa",
  storageBucket: "blog-project-3c3aa.appspot.com",
  messagingSenderId: "38598967628",
  appId: "1:38598967628:web:9c20e447ae93c0c6188fe9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()