import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const provider = new GoogleAuthProvider();

  // Load wishlist from localStorage on mount
  useEffect(() => {
    console.log({
      wishlist: JSON.parse(localStorage.getItem("wishlist"))
    });
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      let updated;
      if (prev.some((item) => item.id === product.id)) {
        updated = prev.filter((item) => item.id !== product.id);
      } else {
        updated = [...prev, product];
      }
      localStorage.setItem("wishlist", JSON.stringify(updated));
      return updated;
    });
  };


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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Add to Cart function
  // Load cart from localStorage on mount
useEffect(() => {
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  setCart(savedCart);
}, []);

// Add to cart function with localStorage persistence
const addToCart = (product) => {
  setCart((prev) => {
    let updated;
    const existing = prev.find((item) => item.id === product.id);

    if (existing) {
      // If product already in cart, increase quantity
      updated = prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // Add new product with quantity 1
      updated = [...prev, { ...product, quantity: 1 }];
    }

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(updated));
    return updated;
  });
};

// Optional: remove from cart
const removeFromCart = (productId) => {
  setCart((prev) => {
    const updated = prev.filter((item) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updated));
    return updated;
  });
};


  return (
    <AuthContext.Provider value={{
      user,
      loading,
      wishlist,
      addToWishlist,
      addToCart, // <-- add here
      cart, 
      removeFromCart,  // <-- add remove function if needed
      createUser,
      logOut,
      login,
      handleWithGoogle,
      resetPassword
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
