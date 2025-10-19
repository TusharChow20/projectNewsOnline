import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React from "react";
import { useState } from "react";
import { createContext } from "react";
import auth from "../FireBase/firebase.config.js";
import { useEffect } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const sinOut = () => {
    return signOut(auth);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authData = {
    user,
    setUser,
    createUser,
    sinOut,
    signIn,
    
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
