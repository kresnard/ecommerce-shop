// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAm4R9GoqWYs0O6joZQOuutNkPHjMpW4nk",
    authDomain: "e-commerce-shop-9b3c3.firebaseapp.com",
    projectId: "e-commerce-shop-9b3c3",
    storageBucket: "e-commerce-shop-9b3c3.appspot.com",
    messagingSenderId: "331639752447",
    appId: "1:331639752447:web:63c9bedc2530899b1f6eca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

const logInWithEmailAndPassword = async (email, password) => {
    try {
    await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const signUpWithEmailAndPassword = async (name, email, password) => {
    try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name,
        authProvider: 'local',
        email
    });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};



export {auth, logInWithEmailAndPassword, signUpWithEmailAndPassword};