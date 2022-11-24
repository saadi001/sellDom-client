// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtFTuR715GgKbro-UszlG2sGl5qYP8da8",
  authDomain: "selldom-client.firebaseapp.com",
  projectId: "selldom-client",
  storageBucket: "selldom-client.appspot.com",
  messagingSenderId: "576588747267",
  appId: "1:576588747267:web:c9912f6686441c7f633436"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;