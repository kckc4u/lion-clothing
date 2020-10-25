import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBCY46QyYvU5oGQKE49QaR-lXvOzFaYo9A",
    authDomain: "lion-cloths.firebaseapp.com",
    databaseURL: "https://lion-cloths.firebaseio.com",
    projectId: "lion-cloths",
    storageBucket: "lion-cloths.appspot.com",
    messagingSenderId: "66424537518",
    appId: "1:66424537518:web:411b7cc15eb201baf6083f",
    measurementId: "G-LECTNSQPZK"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signinWithGoogle = () => auth.signInWithPopup(provider);

  export const createUserProfileDoc = async (authUser, additionalData) => {
    if (!authUser) return;
  
    const userRef = firestore.doc(`users/${authUser.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { displayName, email } = authUser;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log(`error while creating user: ${error.message}`);
      }
    }

    return userRef;
  }

  export default firebase;