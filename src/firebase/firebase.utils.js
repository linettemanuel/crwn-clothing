import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA-6KXqdJ-dhj63px7R0bN6scAUmc1uPws",
    authDomain: "crwn-db-9bbd5.firebaseapp.com",
    databaseURL: "https://crwn-db-9bbd5.firebaseio.com",
    projectId: "crwn-db-9bbd5",
    storageBucket: "crwn-db-9bbd5.appspot.com",
    messagingSenderId: "290146775840",
    appId: "1:290146775840:web:61ec5b0b7ee170ead15d45"
  };

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const singInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;

