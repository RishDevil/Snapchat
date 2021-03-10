import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCmrKSIU3CcQtf073V3XU1GCQcooV2UoM",
  authDomain: "apps-4ffa0.firebaseapp.com",
  databaseURL: "https://apps-4ffa0.firebaseio.com",
  projectId: "apps-4ffa0",
  storageBucket: "apps-4ffa0.appspot.com",
  messagingSenderId: "1016462183749",
  appId: "1:1016462183749:web:1e8a1c69ce7bdf8e02c22c",
  measurementId: "G-M1FG82KFMJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
