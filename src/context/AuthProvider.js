import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signOut,
   updateProfile,
} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState();

   const register = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const updateUser = (name, imageUrl) => {
      return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: imageUrl,
      });
   };

   const login = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   const logout = () => {
      return signOut(auth);
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         console.log('Current User', currentUser);
      });
      return () => unsubscribe();
   }, []);

   const authInfo = { register, login, logout, updateUser, user };
   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
