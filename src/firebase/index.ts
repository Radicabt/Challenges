import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC73VA6f8yF1rFjs62oZfReG7oYSKj51So",
  authDomain: "brainster-fit-app.firebaseapp.com",
  projectId: "brainster-fit-app",
  storageBucket: "brainster-fit-app.appspot.com",
  messagingSenderId: "1089754184006",
  appId: "1:1089754184006:web:f3c6af6149c1afb0410d47",
  measurementId: "G-365SRB6R1G"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);  

export { auth, db, GoogleAuthProvider, signInWithPopup };
