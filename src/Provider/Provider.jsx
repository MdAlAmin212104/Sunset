import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase_config';
export const AuthProvider = createContext(null)

const Provider = ({ children }) => {
      const [user, setUser] = useState('');
      const googleProvider = new GoogleAuthProvider()
      const githubProvider = new GithubAuthProvider()

      const createUserInEmail = (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password)
      }

      const userLogIn = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password) 
      }

      const googleLogin = () => {
            return signInWithPopup(auth, googleProvider)
      }
      const githubLogin = () => {
            return signInWithPopup(auth, githubProvider)
      }

      const logOut = () => {
            return signOut(auth)
      }

      //console.log(user.displayName);

      const profileUpdate = (name, photo) => {
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL : photo,
            })
      }


      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser);
            });
            return () => {
                  unSubscribe()
            };
      }, [])

      //console.log(user.displayName);


      const userInfo = {
            user,
            createUserInEmail,
            userLogIn,
            googleLogin,
            githubLogin,
            logOut,
            profileUpdate,
      }



      return (
            <AuthProvider.Provider value={userInfo}>
                  {children}
            </AuthProvider.Provider>
      );
};

export default Provider;