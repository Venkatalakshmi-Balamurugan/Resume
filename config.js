// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiRMuY3sXQrFSfEbfjzW4x0EUtxuoUC8c",
  authDomain: "resume-529e4.firebaseapp.com",
  projectId: "resume-529e4",
  storageBucket: "resume-529e4.appspot.com",
  messagingSenderId: "130941869459",
  appId: "1:130941869459:web:aa09fbf5970f4c6d161c66",
  measurementId: "G-RKWEHP03FL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);