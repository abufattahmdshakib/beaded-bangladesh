//NOT FOR SHARE


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_SOME_KEY_apiKey,
    authDomain: import.meta.env.VITE_SOME_KEY_authDomain,
    projectId: import.meta.env.VITE_SOME_KEY_projectId,
    storageBucket: import.meta.env.VITE_SOME_KEY_storageBucket,
    messagingSenderId: import.meta.env.VITE_SOME_KEY_messagingSenderId,
    appId: import.meta.env.VITE_SOME_KEY_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;