import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail
} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true);  // 🔹 loading state যোগ করা হলো

    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true); // 🔹 loading set
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true); // 🔹 loading set
        return signOut(auth);
    };

    const login = (email, password) => {
        setLoading(true); // 🔹 loading set
        return signInWithEmailAndPassword(auth, email, password);
    };

    const handleWithGoogle = () => {
        setLoading(true); // 🔹 loading set
        return signInWithPopup(auth, provider);
    };

    const resetPassword = (email) => {
        setLoading(true); // 🔹 loading set
        return sendPasswordResetEmail(auth, email);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false); // 🔹 auth state change হলে loading false
        });
        return () => unsubscribe();
    }, []);

    const authhData = {
        user, 
        loading,   // 🔹 context এ loading পাঠানো হলো
        setUser, 
        createUser, 
        logOut, 
        login, 
        handleWithGoogle, 
        resetPassword 
    };

    return (
        <AuthContext.Provider value={authhData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
