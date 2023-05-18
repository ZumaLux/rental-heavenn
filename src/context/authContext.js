import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => setCurrentUser(user));
  }, []);
  useEffect(() => {
    console.log("currentUser: ", currentUser);
  }, [currentUser]);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};
