//(npm i firebase@^8.10.0) use this firebase install comment to avoide errors

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCbXVzynTELqDvc-7vJ0cqsxzoHFDzlYAQ",
    authDomain: "hotstar-clone-354c5.firebaseapp.com",
    projectId: "hotstar-clone-354c5",
    storageBucket: "hotstar-clone-354c5.appspot.com",
    messagingSenderId: "500165010549",
    appId: "1:500165010549:web:dd9e747731715b927a443c",
    measurementId: "G-S1W9TE7F6D"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;