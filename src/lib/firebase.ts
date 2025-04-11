
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyA7Tc-SWjp9tUwVgSOStqBQNj53eZHi0fY",

  authDomain: "lingobridge-54870.firebaseapp.com",

  projectId: "lingobridge-54870",

  storageBucket: "lingobridge-54870.firebasestorage.app",

  messagingSenderId: "247838620989",

  appId: "1:247838620989:web:53aa85ceacaadaaa7f9954"

};


// const firebaseConfig = {

//   apiKey: "AIzaSyCCd8MZC1ltlrvQF0UTIBBjJcyX-kasbZg",

//   authDomain: "flash-chat-4395a.firebaseapp.com",

//   projectId: "flash-chat-4395a",

//   storageBucket: "flash-chat-4395a.appspot.com",

//   messagingSenderId: "419465650016",

//   appId: "1:419465650016:web:7089840aa8905668958805",

//   measurementId: "G-P3779QFGTJ"

// };



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
