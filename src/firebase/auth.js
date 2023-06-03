import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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
export const loginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Login successfull");
    return true;
  } catch (err) {
    console.log(err);
  }
  return false;
};

//SIGN OUT USER -FIREBASE-
export async function signOutUser() {
  await signOut(auth);
  console.log("Signed Out!");
}

// CREATE USER DETAILS -FIREBASE-
export async function createUserDetails(path, user, uid) {
  try {
    await setDoc(doc(db, path, uid), { ...user });
    console.log("User Details Added Successfully!");
  } catch (err) {
    console.log(err.message);
  }
}

// AUTH WITH GOOGLE
export async function authWithGoogle() {
  const provider = new GoogleAuthProvider();
  // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return signInWithPopup(auth, provider).then((res) => console.log(""));
  // .then((result) => {
  //   return result;
  // });
}

// AUTH WITH GITHUB
export async function authWithGithub() {}
