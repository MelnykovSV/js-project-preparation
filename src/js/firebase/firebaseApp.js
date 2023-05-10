import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyC-f08qD6BqdVE49Fk1Hrhnb18ww-swp9s',
  authDomain: 'blended1-js-project.firebaseapp.com',
  databaseURL:
    'https://blended1-js-project-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'blended1-js-project',
  storageBucket: 'blended1-js-project.appspot.com',
  messagingSenderId: '453737683945',
  appId: '1:453737683945:web:0c3c25fcb2a4883929c978',
  measurementId: 'G-93VBB2L2Q1',
};

export const app = initializeApp(firebaseConfig);
