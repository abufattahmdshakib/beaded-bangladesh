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
    const [loading, setLoading] = useState(true);  
    const [wishlist, setWishlist] = useState([]); // ✅ Wishlist state

    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const handleWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };

    const addToWishlist = (product) => {
        setWishlist(prev => {
            // Prevent duplicates
            if (prev.some(item => item.id === product.id)) return prev;
            return [...prev, product];
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            wishlist,        // ✅ Provide wishlist
            setWishlist,     // ✅ Provide setter
            createUser,
            logOut,
            login,
            handleWithGoogle,
            resetPassword,
            addToWishlist    // ✅ Provide add function
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
