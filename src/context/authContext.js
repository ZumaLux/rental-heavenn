import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { collection_users } from "../firebase/variables";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) return setCurrentUser(null);
      const docRef = doc(db, collection_users, user.uid);
      const userDetails = await getDoc(docRef);

      setCurrentUser({ ...userDetails.data(), uid: user.uid });
    });
  }, []);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
export default AuthProvider; // wraper
