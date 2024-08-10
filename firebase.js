// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWK5qbHjbBRhHBOcxiWS1JFWAcuzi13d4",
  authDomain: "inventory-management-9acec.firebaseapp.com",
  projectId: "inventory-management-9acec",
  storageBucket: "inventory-management-9acec.appspot.com",
  messagingSenderId: "554776190962",
  appId: "1:554776190962:web:8c389e99bbbf08dd1dd56b",
  measurementId: "G-GM8S5KJNMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}