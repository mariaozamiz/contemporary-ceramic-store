import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyBZxiSWHsyGLsfmihPDjxYxN_g8UW4YI7w',
    authDomain: 'my-contemporary-ceramic-store.firebaseapp.com',
    databaseURL: 'https://my-contemporary-ceramic-store.firebaseio.com',
    projectId: 'my-contemporary-ceramic-store',
    storageBucket: 'my-contemporary-ceramic-store.appspot.com',
    messagingSenderId: '570018771260',
    appId: '1:570018771260:web:8326d6ab0b3077c182ae39',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
