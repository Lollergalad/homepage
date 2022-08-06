import { createContext, useState } from "react";

import fakeAuthProvider from "./utilities/authentication/fakeAuthProvider";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const getCurrentUser = () => {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  };

  const refreshToken = () => {
    const newUserData = { ...user };
    newUserData.accessToken = `${newUserData.accessToken}1`;
    newUserData.refreshToken = `${newUserData.refreshToken}1`;
    setUser(newUserData);
    localStorage.setItem("user", JSON.stringify(newUserData));
  };

  const signIn = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      const userData = {
        name: newUser,
        accessToken: "fake-jwt-token",
        refreshToken: "fake-jwt-refresh-token",
      };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      callback();
    });
  };

  const signOut = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      localStorage.removeItem("user");
      callback();
    });
  };

  return (
    <AuthContext.Provider
      value={{ getCurrentUser, refreshToken, signIn, signOut, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
