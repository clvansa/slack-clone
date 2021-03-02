import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBT3eNM8Y4S0bDuVi9a3CCWwesFMMF4ajc",
  authDomain: "slack-clone-601bc.firebaseapp.com",
  projectId: "slack-clone-601bc",
  storageBucket: "slack-clone-601bc.appspot.com",
  messagingSenderId: "423587660622",
  appId: "1:423587660622:web:4ca53996aea3ecc6f5d41f"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, db , provider};