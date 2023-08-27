import firebase from "firebase";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBQMil1hwQM3c1fD4QGD7EFylG-tTHvw0",
  authDomain: "domosbor-1088c.firebaseapp.com",
  projectId: "domosbor-1088c",
  storageBucket: "domosbor-1088c.appspot.com",
  messagingSenderId: "1063914550348",
  appId: "1:1063914550348:web:c560b6ccdcc55ad948f0e9",
  measurementId: "G-NF5Z0RXKF0"
};
firebase.initializeApp(firebaseConfig)
const projectFirestore = firebase.firestore()
export {projectFirestore}