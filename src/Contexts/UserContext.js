import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)


const UserContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const varifyEmail = ()=>{
        return sendEmailVerification(auth.currentUser)
    }


    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }


 const updateUserProfile = (profile) =>{
    return updateProfile(auth.currentUser)
 }







    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("current user:", currentUser);
            setUser(currentUser);
            setLoading(false)
        });

        return () => unSubscribe();

    }, [])

    const authInfo = { user,loading, createUser, varifyEmail, signIn, logOut }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;