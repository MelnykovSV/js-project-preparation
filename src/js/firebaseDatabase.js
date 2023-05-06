import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, get } from 'firebase/database';
import globalState from './globalState';

import authUtils from './firebaseAuth';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: 'AIzaSyAdDj9F_jubuCOC76pSoibdy_DVCdFqGhQ',
  authDomain: 'js-project-preparation.firebaseapp.com',
  databaseURL:
    'https://js-project-preparation-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'js-project-preparation',
  storageBucket: 'js-project-preparation.appspot.com',
  messagingSenderId: '476626012391',
  appId: '1:476626012391:web:081c79df589d1579103a42',
  measurementId: 'G-8S7FQJPFG2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

function writeUserData(userId, data) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), data);
}

writeUserData('k0Nkd7t83eNBhYRVJ8fLodvqv1X2', globalState.get());

class FirebaseDatabase {
  writeUserData() {
    const userId = authUtils.getCurrentUserId();

    const data = globalState.get();

    const db = getDatabase();
    set(ref(db, 'users/' + userId), data);
  }

  getUserData() {
    const userId = authUtils.getCurrentUserId();
    const db = getDatabase();
    const starCountRef = ref(db, 'users/' + userId);

    onValue(starCountRef, snapshot => {
      const data = snapshot;
      console.log(snapshot);
      //   updateStarCount(postElement, data);
    });
  }
}

const databaseUtils = new FirebaseDatabase();

export default databaseUtils;
