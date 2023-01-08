import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBs2LKKIkELzw447iwp_nM1BU-DWvZO3wg",
  authDomain: "beauty-ed1a3.firebaseapp.com",
  projectId: "beauty-ed1a3",
  storageBucket: "beauty-ed1a3.appspot.com",
  messagingSenderId: "780563816119",
  appId: "1:780563816119:web:193bfe0e14d3bb831f7732",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
