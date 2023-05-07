// Import the functions you need from the SDKs you need
import globalState from './globalState';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from 'firebase/auth';

import databaseUtils from './firebaseDatabase';
import { INITIAL_STATE_VALUE } from '../constants';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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
const analytics = getAnalytics(app);

//create user

const auth = getAuth(app);

const authComponent = document.querySelector('.auth-component');

class FirebaseAuth {
  signUp(e) {
    e.preventDefault();
    authComponent.classList.remove('signed-out');
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);

        authComponent.classList.add('signed-out');

        // ..
      })
      .finally(() => {
        e.target.classList.add('visually-hidden');
      });
  }

  signIn(e) {
    e.preventDefault();
    authComponent.classList.remove('signed-out');
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log('signed in');
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      })
      .finally(() => {
        e.target.classList.add('visually-hidden');
      });
  }

  signOutUser() {
    authComponent.classList.remove('signed-in');
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('Sign-out successful');
      })
      .catch(error => {
        // An error happened.
        authComponent.classList.add('signed-in');
        console.log('An error happened');
      });
  }

  checkUserStatus() {
    onAuthStateChanged(auth, user => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // console.log(user);
        authComponent.querySelector(
          '.auth-component__user-email'
        ).textContent = `${user.email}`;
        console.log('user is in system');

        authComponent.classList.add('signed-in');
        // ...
      } else {
        // User is signed out

        console.log('user signied out');

        authComponent.classList.add('signed-out');
        // ...
      }
    });
  }

  isAuthenticated() {
    return new Promise(resolve => {
      onAuthStateChanged(auth, user => {
        if (user) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  getInitialState() {
    onAuthStateChanged(auth, user => {
      if (user) {
        databaseUtils.getUserData().then(data => {
          if (data) {
            globalState.set(data);
          } else {
            globalState.set(INITIAL_STATE_VALUE);
          }
        });

        // return stateData;
      } else {
        if (localStorage.getItem('globalState')) {
          globalState.set(JSON.parse(localStorage.getItem('globalState')));
        } else {
          globalState.set(INITIAL_STATE_VALUE);
          globalState.writeToLocalStorage();
        }
      }
    });
  }

  // async getCurrentUser() {
  //   console.log(auth.currentUser);
  //   const updatedProfile = await updateProfile(auth.currentUser, {
  //     someValue: 'azazaza',
  //   })
  //     .then(() => {
  //       // Profile updated!
  //       // ...
  //       console.log(auth.currentUser);
  //     })
  //     .catch(error => {
  //       // An error occurred
  //       // ...
  //     });
  //   return updatedProfile;
  // }

  getCurrentUserId() {
    const user = auth.currentUser;
    if (user !== null) {
      console.log('get id');
      console.log(user);
      return user.uid;
    }
  }
}

const authUtils = new FirebaseAuth();

export default authUtils;
