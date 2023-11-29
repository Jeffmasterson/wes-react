import Rebase from 're-base';
import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDjpxzrYeO6HS-LaIU0J_iz4qSymCJCSAI",
    authDomain: "fish-store-1f62c.firebaseapp.com",
    databaseURL: "https://fish-store-1f62c-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());
// This is a named export
export { firebaseApp };
// this is a default export
export default base;