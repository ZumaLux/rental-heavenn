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
    return { user: response.user, message: null };
  } catch (err) {
    if (err.code === "auth/email-already-in-use") {
      return { user: null, message: "Account with this email already exists!" };
    }
    if (err.code === "auth/weak-password") {
      return { user: null, message: "Password should be at least 6 characters!" };
    }
    return { user: null, message: err.message };
  }
};

// LOGIN USER -FIREBASE-
export const loginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true, message: "Login successfull" };
  } catch (err) {
    if (err.code === "auth/user-not-found") {
      return { success: false, message: "User does not exist!" };
    }
    if (err.code === "auth/wrong-password") {
      return { success: false, message: "Incorrect password!" };
    }
    return { success: false, message: err.message };
  }
};

//SIGN OUT USER -FIREBASE-
export async function signOutUser() {
  await signOut(auth);
}

// CREATE USER DETAILS -FIREBASE-
export async function createUserDetails(path, user, uid) {
  try {
    await setDoc(doc(db, path, uid), { ...user });
    // console.log("User Details Added Successfully!");
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
      // new user
      const isNewUser = getAdditionalUserInfo(res).isNewUser;
      if (isNewUser) {
        return { user: res.user, isNewUser: true };
      }
      // existing user
      return { user: res.user, isNewUser: false };
    })
    .catch((err) => {
      if (err.code === "auth/account-exists-with-different-credential") {
        return { user: null, isNewUser: false };
      }
      return { user: null, isNewUser: false };
    });
}

// AUTH WITH GITHUB
export async function authWithGithub() {
  const provider = new GithubAuthProvider();
  return signInWithPopup(auth, provider)
    .then((res) => {
      if (!res) return;
      const isNewUser = getAdditionalUserInfo(res).isNewUser;
      return { user: res.user, isNewUser: isNewUser };
    })
    .catch((err) => {
      if (err.code === "auth/account-exists-with-different-credential") {
        return {
          user: null,
          isNewUser: null,
        };
      }
      return {
        user: null,
        isNewUser: null,
      };
    });
}
