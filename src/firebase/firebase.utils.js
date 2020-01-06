import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBex6YXNJnjZLDYeVos-qYrf4thdYAkAmM",
    authDomain: "crwn-db-b0a4b.firebaseapp.com",
    databaseURL: "https://crwn-db-b0a4b.firebaseio.com",
    projectId: "crwn-db-b0a4b",
    storageBucket: "crwn-db-b0a4b.appspot.com",
    messagingSenderId: "540891317971",
    appId: "1:540891317971:web:88f37590bb548bbd0f3626",
    measurementId: "G-HJR0JLHH2C"
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
        }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;