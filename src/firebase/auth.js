import { auth, db } from "./config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// REGISTER USER -FIREBASE-
export const registerFirebaseUser = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Registration successfull");
    return response.user;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

// LOGIN USER -FIREBASE-
export const loginFirebaseUser = () => {};
