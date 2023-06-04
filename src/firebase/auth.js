import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./config";
import {
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

// REGISTER USER -FIREBASE-
export const registerUser = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Registration successfull");
    return response.user;
  } catch (err) {
    if (err.code === "auth/email-already-in-use") {
      console.log("Account with this email already exists!");
    } else {
      console.log(err.message);
    }
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
    console.log(err.message);
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
  return signInWithPopup(auth, provider)
    .then((res) => {
      if (!res) return;
      const isNewUser = getAdditionalUserInfo(res).isNewUser;
      if (isNewUser) {
        console.log("New Google Account created!");
        return { user: res.user, isNewUser: true };
      }
      console.log("Login to existing google account!");
      return { user: res.user, isNewUser: false };
    })
    .catch((err) => {
      if (err.code === "auth/account-exists-with-different-credential") {
        console.log("Account with this email already exists!");
      } else {
        console.log(err.message);
      }
    });
}

// AUTH WITH GITHUB
export async function authWithGithub() {
  const provider = new GithubAuthProvider();
  return signInWithPopup(auth, provider)
    .then((res) => {
      if (!res) return;
      const isNewUser = getAdditionalUserInfo(res).isNewUser;
      if (isNewUser) {
        console.log("New Github Account created!");
      } else {
        console.log("Login to existing github account!");
      }
      return { user: res.user, isNewUser: isNewUser };
    })
    .catch((err) => {
      if (err.code === "auth/account-exists-with-different-credential") {
        console.log("Account with this email already exists!");
      } else {
        console.log(err.message);
      }
    });
}
