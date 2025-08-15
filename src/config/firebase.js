// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJEi2T-hJzWUZHI_0LnTojEwAGuzbWXQM",
  authDomain: "contact-app-a9eb0.firebaseapp.com",
  projectId: "contact-app-a9eb0",
  storageBucket: "contact-app-a9eb0.firebasestorage.app",
  messagingSenderId: "1061491689677",
  appId: "1:1061491689677:web:08e8c4961083f198594184"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);