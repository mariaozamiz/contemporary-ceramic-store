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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    console.log('snapShop en firebase', snapShot, 'e userRef', userRef);
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
