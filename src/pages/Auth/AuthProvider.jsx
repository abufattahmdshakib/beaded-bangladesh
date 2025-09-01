import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const provider = new GoogleAuthProvider();

  // Wishlist Functions
  const addToWishlist = (product) => {
    if (!user) return; // not logged in
    setWishlist((prev) => {
      let updated;
      if (prev.some((item) => item.id === product.id)) {
        updated = prev.filter((item) => item.id !== product.id);
      } else {
        updated = [...prev, product];
      }
      localStorage.setItem(`wishlist_${user.uid}`, JSON.stringify(updated));
      return updated;
    });
  };

  // Cart Functions
  const addToCart = (product) => {
    if (!user) return;
    setCart((prev) => {
      let updated;
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        updated = prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updated = [...prev, { ...product, quantity: 1 }];
      }

      localStorage.setItem(`cart_${user.uid}`, JSON.stringify(updated));
      return updated;
    });
  };

  const removeFromCart = (productId) => {
    if (!user) return;
    setCart((prev) => {
      const updated = prev.filter((item) => item.id !== productId);
      localStorage.setItem(`cart_${user.uid}`, JSON.stringify(updated));
      return updated;
    });
  };

  // Auth Functions
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
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

  const logOut = () => {
    setLoading(true);
    setWishlist([]);
    setCart([]);
    return signOut(auth);
  };

  // Observe Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const savedWishlist =
          JSON.parse(localStorage.getItem(`wishlist_${currentUser.uid}`)) || [];
        setWishlist(savedWishlist);

        const savedCart =
          JSON.parse(localStorage.getItem(`cart_${currentUser.uid}`)) || [];
        setCart(savedCart);
      } else {
        setWishlist([]);
        setCart([]);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        wishlist,
        addToWishlist,
        cart,
        addToCart,
        removeFromCart,
        createUser,
        logOut,
        login,
        handleWithGoogle,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
