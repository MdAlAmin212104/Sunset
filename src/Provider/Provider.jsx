import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase_config';
export const AuthProvider = createContext(null)

const Provider = ({ children }) => {
      const [user, setUser] = useState('');

      const createUserInEmail = (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password)
      }

      const userLogIn = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password) 
      }
      

      const logOut = () => {
            return signOut(auth)
      }



      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser);
            });
            return () => {
                  unSubscribe()
            };
      }, [])




      const userInfo = {
            user,
            createUserInEmail,
            userLogIn,
            logOut,
      }



      return (
            <AuthProvider.Provider value={userInfo}>
                  {children}
            </AuthProvider.Provider>
      );
};

export default Provider;