import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React from "react";
import { useState } from "react";
import { createContext } from "react";
import auth from "../FireBase/firebase.config";
import { useEffect } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [load, setLoad] = useState(true);

  const createUser = (email, password) => {
    setLoad(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoad(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoad(true);
    return signOut(auth);
  };

  const updateUserProfile = (updateData) => {
    if (!auth.currentUser) {
      return Promise.reject(new Error("No user is currently signed in"));
    }
    return updateProfile(auth.currentUser, {
      displayName: updateData.displayName,
      photoURL: updateData.photoURL,
    });
  };

  const verifyEmail = () => {
    if (!auth.currentUser) {
      return Promise.reject(new Error("No user is currently signed in"));
    }
    return sendEmailVerification(auth.currentUser);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoad(false);
      console.log("Auth state changed:", currentUser?.email);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    signIn,
    logOut,
    load,
    setLoad,
    updateUserProfile,
    verifyEmail,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
