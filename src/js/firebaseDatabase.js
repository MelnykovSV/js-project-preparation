import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, child, get } from 'firebase/database';
import globalState from './globalState';

import authUtils from './firebaseAuth';
import { INITIAL_STATE_VALUE } from '../constants';

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

class FirebaseDatabase {
  writeUserData() {
    const userId = authUtils.getCurrentUserId();

    const data = globalState.get();
    const db = getDatabase();
    set(ref(db, 'users/' + userId), data);
  }

  async getUserData() {
    const userId = authUtils.getCurrentUserId();
    const db = getDatabase();

    const data = await get(ref(db, 'users/' + userId))
      .then(snapshot => {
        if (snapshot.exists()) {
          const result = {
            ...INITIAL_STATE_VALUE,
            ...snapshot.val(),
          };
          return result;
        } else {
          console.log('No data available');
        }
      })
      .catch(error => {
        console.error(error);
      });
    return data;
  }
}

const databaseUtils = new FirebaseDatabase();

export default databaseUtils;
