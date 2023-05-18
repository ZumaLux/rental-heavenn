import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// REGISTER USER -FIREBASE-
export const registerUser = async (email, password) => {
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
export const loginUser = () => {};

//SIGN OUT USER
export async function signOutUser() {
  await signOut(auth);
  console.log("Signed Out!");
}

// CREATE USER DETAILS
export async function createUserDetails(path, user, uid) {
  try {
    await setDoc(doc(db, path, uid), { ...user });
    console.log("User Details Added Successfully!");
  } catch (err) {
    console.log(err.message);
  }
}
