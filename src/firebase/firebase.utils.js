import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD7cfmDuiYVEQfThKN0ZCFc3J8nCZbvP0Y",
    authDomain: "crwn-db-bbb9e.firebaseapp.com",
    databaseURL: "https://crwn-db-bbb9e.firebaseio.com",
    projectId: "crwn-db-bbb9e",
    storageBucket: "crwn-db-bbb9e.appspot.com",
    messagingSenderId: "366528564715",
    appId: "1:366528564715:web:3ee5f97feee9c2d1671dae",
    measurementId: "G-TMX0RBLM3M"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;