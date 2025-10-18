import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { createContext } from "react";
import auth from "../FireBase/firebase.config,";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const authData = {
    user,
    setUser,
    createUser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
