import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  databaseURL: "https://gabonvr-explore-default-rtdb.firebaseio.com/",
};

// Initialize Firebase using the compat library, only if it has not been initialized yet.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Export the database instance using the v8-compatible API from the main firebase object.
export const db = firebase.database();
