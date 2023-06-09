// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVv_Mt6KB-YdfuZFeZYffix8TDGTvVSK8",
  authDomain: "deliveroo-2-c6550.firebaseapp.com",
  projectId: "deliveroo-2-c6550",
  storageBucket: "deliveroo-2-c6550.appspot.com",
  messagingSenderId: "40768926344",
  appId: "1:40768926344:web:f51d7185f9e4919cb2253d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;