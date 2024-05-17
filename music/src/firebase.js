// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5y_UJfoe3-Stbznr5ksK7IWwmkHd_Dqc",
  authDomain: "anuel-aa-e46c0.firebaseapp.com",
  projectId: "anuel-aa-e46c0",
  storageBucket: "anuel-aa-e46c0.appspot.com",
  messagingSenderId: "908112240468",
  appId: "1:908112240468:web:c6bb0b8099f584dadd72c1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };