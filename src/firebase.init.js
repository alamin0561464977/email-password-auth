// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_hZjP85zoXbEO3UFuEiXtQAObEJJ2xBc",
    authDomain: "simple-firedase-authentication.firebaseapp.com",
    projectId: "simple-firedase-authentication",
    storageBucket: "simple-firedase-authentication.appspot.com",
    messagingSenderId: "1021573017789",
    appId: "1:1021573017789:web:0ee01ad248c02e7cc4c7d4",
    measurementId: "G-MVV2C86YTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;