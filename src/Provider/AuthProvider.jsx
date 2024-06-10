import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const logInWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const faceBookProvider = new FacebookAuthProvider();
  const faceBookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, faceBookProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const userInfo = { email: currentUser.email };

        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            const loggedInUser = {
              email: currentUser?.email,
              name: currentUser?.displayName,
              role: "user",
              status: "Verified",
            };
            // eslint-disable-next-line no-unused-vars
            axiosPublic.post(`/users`, loggedInUser).then((data) => {
              setLoading(false);
            });
          }
        });
      } else {
        localStorage.removeItem("token");
        setLoading(false);
      }
    });

    return () => {
      return unSubscribe();
    };
  }, []);


  const contextValue = {
    user,
    loading,
    createUser,
    updateUserProfile,
    logOut,
    logInWithEmailAndPassword,
    googleLogin,
    faceBookLogin,
    setUser,
    setLoading,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
