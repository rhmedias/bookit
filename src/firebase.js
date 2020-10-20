import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyD7d1Whx_cuEk89mClxeiE1J6sLdfFyr0U",
    authDomain: "bookitapp-869ac.firebaseapp.com",
    databaseURL: "https://bookitapp-869ac.firebaseio.com",
    projectId: "bookitapp-869ac",
    storageBucket: "bookitapp-869ac.appspot.com",
    messagingSenderId: "675035760833",
    appId: "1:675035760833:web:0fef0aba60a59664a8ec40",
    measurementId: "G-7TRXLRMWRP"
  };

//   initialize firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
//ends here

//implement google sign in 
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
//ends here

//implement signin by email and password
export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
//ends here
