// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCLPR_i_mKjnQAA_w6vMF57MXDKLbKmQfU",
  authDomain: "e-commerce-website-8cf86.firebaseapp.com",
  projectId: "e-commerce-website-8cf86",
  storageBucket: "e-commerce-website-8cf86.appspot.com",
  messagingSenderId: "651407739053",
  appId: "1:651407739053:web:161ccdd7f9916010bede24",
  measurementId: "G-71JB6LT0ED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
