// Import the functions you need from the SDKs you need
import firebase  from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database' 
import 'firebase/compat/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ5ef4uZDLBJK7jljD9jcaPDHwRVa8qbc",
  authDomain: "instagramdemo-b6dd3.firebaseapp.com",
  projectId: "instagramdemo-b6dd3",
  storageBucket: "instagramdemo-b6dd3.appspot.com",
  messagingSenderId: "205664976499",
  appId: "1:205664976499:web:1ccfd0dcabcc873fd3b406",
  measurementId: "G-BES9F6JZ07"
};

firebase.initializeApp(firebaseConfig)

const database = firebase.database();



export default database