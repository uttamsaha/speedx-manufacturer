// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeOSfV-xcMwG2PgiaIooYabgbzlGLbLGU",
  authDomain: "speedx-manufacturer.firebaseapp.com",
  projectId: "speedx-manufacturer",
  storageBucket: "speedx-manufacturer.appspot.com",
  messagingSenderId: "31050499692",
  appId: "1:31050499692:web:691e55f24314eded7f7a49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;