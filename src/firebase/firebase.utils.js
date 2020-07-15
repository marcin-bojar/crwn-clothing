import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDJGF4e9ODCJy8A92OPmprz9dti0z98nXg",
    authDomain: "crwn-clothing-5e3a5.firebaseapp.com",
    databaseURL: "https://crwn-clothing-5e3a5.firebaseio.com",
    projectId: "crwn-clothing-5e3a5",
    storageBucket: "crwn-clothing-5e3a5.appspot.com",
    messagingSenderId: "623453639140",
    appId: "1:623453639140:web:e99aa4caa7ec76520777f1",
    measurementId: "G-DGTB4203TF"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (user, additionalData) => {
    if(!user) return;

    const userRef = firestore.doc(`/users/${user.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
      const { displayName, email } = user;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch(error) {
        console.log('Error creating user', error);
      }
    }

    return userRef;
  };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;