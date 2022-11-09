import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
   createUserWithEmailAndPassword,
   getAuth,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from 'firebase/auth';

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState([]);
   const [loader, setLoader] = useState(true);

   //register user

   const register = (email, password) => {
      setLoader(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };
   //update user
   const updateUser = (name, imageUrl) => {
      return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: imageUrl,
      });
   };
   //login user
   const login = (email, password) => {
      setLoader(true);
      return signInWithEmailAndPassword(auth, email, password);
   };
   //google sign in
   const googleLogin = () => {
      setLoader(true);
      return signInWithPopup(auth, provider);
   };
   //logout
   const logout = () => {
      return signOut(auth);
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         console.log('Current User', currentUser);
         setLoader(false);
      });
      return () => unsubscribe();
   }, []);

   const authInfo = { register, login, logout, updateUser, user, loader, googleLogin };
   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
