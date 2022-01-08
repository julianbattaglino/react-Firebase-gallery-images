import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCe_TIeEWyTPdysPNPGIqpeekFYfRCzivc",
  authDomain: "react-photo-gallery-3c12d.firebaseapp.com",
  databaseURL: "",
  projectId: "react-photo-gallery-3c12d",
  storageBucket: "react-photo-gallery-3c12d.appspot.com",
  messagingSenderId: "869876052284",
  appId: "1:869876052284:web:1140ec3a4dd88c7473ae39"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };