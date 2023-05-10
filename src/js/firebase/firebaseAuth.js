// Import the functions you need from the SDKs you need
import globalState from '../globalState';
// import { initializeApp } from 'firebase/app';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import databaseUtils from './firebaseDatabase';
import { INITIAL_STATE_VALUE } from '../../constants';
import { notification } from '../utils/notifications';

import { app } from './firebaseApp';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: 'AIzaSyAdDj9F_jubuCOC76pSoibdy_DVCdFqGhQ',
//   authDomain: 'js-project-preparation.firebaseapp.com',
//   databaseURL:
//     'https://js-project-preparation-default-rtdb.europe-west1.firebasedatabase.app',
//   projectId: 'js-project-preparation',
//   storageBucket: 'js-project-preparation.appspot.com',
//   messagingSenderId: '476626012391',
//   appId: '1:476626012391:web:081c79df589d1579103a42',
//   measurementId: 'G-8S7FQJPFG2',
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyC-f08qD6BqdVE49Fk1Hrhnb18ww-swp9s",
//   authDomain: "blended1-js-project.firebaseapp.com",
//   databaseURL: "https://blended1-js-project-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "blended1-js-project",
//   storageBucket: "blended1-js-project.appspot.com",
//   messagingSenderId: "453737683945",
//   appId: "1:453737683945:web:0c3c25fcb2a4883929c978",
//   measurementId: "G-93VBB2L2Q1"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//create user

const auth = getAuth(app);

const authComponent = document.querySelector('.auth-component');

class FirebaseAuth {
  signUp(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    if (email && password.length >= 6) {
      authComponent.classList.remove('signed-out');

      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch(error => {
          notification.error(
            [error.code, error.message],
            'Sorry, unexpected error occured'
          );

          authComponent.classList.add('signed-out');
        })
        .finally(() => {
          e.target.classList.add('visually-hidden');
        });
    }
  }

  signIn(e) {
    e.preventDefault();
    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();
    if (email && password.length >= 6) {
      authComponent.classList.remove('signed-out');

      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // databaseUtils.getUserData().then(data => {
          //   if (data) {
          //     globalState.set(data);
          //   } else {
          //     globalState.set(INITIAL_STATE_VALUE);
          //   }
          // });
        })
        .catch(error => {
          notification.error(
            [error.code, error.message],
            'Sorry, unexpected error occured'
          );
        })
        .finally(() => {
          e.target.classList.add('visually-hidden');
        });
    }
  }

  signOutUser() {
    authComponent.classList.remove('signed-in');
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // if (localStorage.getItem('globalState')) {
        //   globalState.set(JSON.parse(localStorage.getItem('globalState')));
        // } else {
        //   globalState.set(INITIAL_STATE_VALUE);
        //   globalState.writeToLocalStorage();
        // }
      })
      .catch(error => {
        // An error happened.
        authComponent.classList.add('signed-in');
        notification.error(
          [error.code, error.message],
          'Sorry, unexpected error occured'
        );
      });
  }

  authSentry() {
    onAuthStateChanged(auth, user => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        databaseUtils.getUserData().then(data => {
          if (data) {
            globalState.set(data);
          } else {
            globalState.set(INITIAL_STATE_VALUE);
          }
        });
        authComponent.querySelector(
          '.auth-component__user-email'
        ).textContent = `${user.email}`;

        authComponent.classList.add('signed-in');
      } else {
        // User is signed out
        if (localStorage.getItem('globalState')) {
          globalState.set(JSON.parse(localStorage.getItem('globalState')));
        } else {
          globalState.set(INITIAL_STATE_VALUE);
          globalState.writeToLocalStorage();
        }

        authComponent.classList.add('signed-out');
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

  getCurrentUserId() {
    const user = auth.currentUser;
    if (user !== null) {
      return user.uid;
    }
  }
}

const authUtils = new FirebaseAuth();

export default authUtils;
