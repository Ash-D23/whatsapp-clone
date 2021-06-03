import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmAs1hVUZwOgjltRbiUe0Ff15dgXIzKHY",
  authDomain: "whatsapp-clone-3a7fd.firebaseapp.com",
  projectId: "whatsapp-clone-3a7fd",
  storageBucket: "whatsapp-clone-3a7fd.appspot.com",
  messagingSenderId: "59309989050",
  appId: "1:59309989050:web:be82b015907671f2cb3683",
  measurementId: "G-PHN4HE85P7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;
