import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBX5OHWytb09D64xfdl1SQsiJdtpxsdng8",
  authDomain: "imessage-clone-4151b.firebaseapp.com",
  projectId: "imessage-clone-4151b",
  storageBucket: "imessage-clone-4151b.appspot.com",
  messagingSenderId: "667937902865",
  appId: "1:667937902865:web:af1aaf2433cc6289d1bcb0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;