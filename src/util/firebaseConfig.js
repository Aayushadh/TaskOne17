import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCV4MfrTxZcNzc7wrRjtEOT8uac93ufc1c",
  authDomain: "task1-757a6.firebaseapp.com",
  databaseURL:
    "https://task1-757a6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "task1-757a6",
  storageBucket: "task1-757a6.appspot.com",
  messagingSenderId: "72827818909",
  appId: "1:72827818909:web:dd33d959b7b92746c39574",
  measurementId: "G-1FKZSCE0LY",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default firebase;
