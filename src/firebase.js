// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import * as Constants from "./constants/constants";

// need to add firebase confi
const firebaseConfig = {
  apiKey: Constants.FIREBASEAPIKET,
  authDomain: "netflix-clone-7cfa0.firebaseapp.com",
  projectId: "netflix-clone-7cfa0",
  storageBucket: "netflix-clone-7cfa0.appspot.com",
  messagingSenderId: "124075914440",
  appId: Constants.FIREBASEAPPID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    // creating user
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    // creating collection with name "users"
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = async () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
