import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCua_UKGhgZQXoIhAUGxp4iVKJoANcgyuM",
  authDomain: "fgcdb-58189.firebaseapp.com",
  projectId: "fgcdb-58189",
  storageBucket: "fgcdb-58189.appspot.com",
  messagingSenderId: "704728353196",
  appId: "1:704728353196:web:ae1fbbc06c5df6b0c15209"
};
// Init firebase
initializeApp(firebaseConfig);

// Init Firestore
const db = getFirestore();

// Init firebase auth
const auth = getAuth();

export { db, auth };
