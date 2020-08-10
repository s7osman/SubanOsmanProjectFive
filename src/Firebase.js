import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBirRTMn1LWWLnAEWCqOIN2Wem_xBkPrdg",
    authDomain: "goals-app-f14ef.firebaseapp.com",
    databaseURL: "https://goals-app-f14ef.firebaseio.com",
    projectId: "goals-app-f14ef",
    storageBucket: "goals-app-f14ef.appspot.com",
    messagingSenderId: "86249765772",
    appId: "1:86249765772:web:46c422997cb5062f7c34a9"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;