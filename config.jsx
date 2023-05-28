// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzK1OJOWreniTYkwZJs263RXjjTPgRqKc",
  authDomain: "ledlight-8ce18.firebaseapp.com",
  databaseURL: "https://ledlight-8ce18-default-rtdb.firebaseio.com",
  projectId: "ledlight-8ce18",
  storageBucket: "ledlight-8ce18.appspot.com",
  messagingSenderId: "74672954257",
  appId: "1:74672954257:web:a966c1d7305ca945901830",
  measurementId: "G-4J7EXVGZ3S"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const db = getDatabase(app)