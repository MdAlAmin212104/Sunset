import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../firebase/firebase_config';
export const AuthProvider = createContext(null)

const Provider = ({ children }) => {

      const createUserInEmail = (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password)
      }

      const userLogIn = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password) 
      }
      
      const userInfo = {
            createUserInEmail,
            userLogIn,
      }
      return (
            <AuthProvider.Provider value={userInfo}>
                  {children}
            </AuthProvider.Provider>
      );
};

export default Provider;