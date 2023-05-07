import globalState from './js/globalState';

import authUtils from './js/firebaseAuth';

import databaseUtils from './js/firebaseDatabase';

import './js/firebaseDatabase';

const authComponent = document.querySelector('.auth-component');
const signUpForm = document.querySelector('.sign-up-form');
const signInForm = document.querySelector('.sign-in-form');

const testButton = document.querySelector('.test-button');
const stateButton = document.querySelector('.state-button');

authUtils.checkUserStatus();
authUtils.getInitialState();

signUpForm.addEventListener('submit', authUtils.signUp);
signInForm.addEventListener('submit', authUtils.signIn);
authComponent.addEventListener('click', e => {
  if (e.target.classList.contains('auth-component__sign-out-button')) {
    authUtils.signOutUser();
  }
  if (e.target.classList.contains('auth-component__sign-up-button')) {
    signUpForm.classList.remove('visually-hidden');
  }
  if (e.target.classList.contains('auth-component__sign-in-button')) {
    signInForm.classList.remove('visually-hidden');
  }
});

testButton.addEventListener('click', databaseUtils.getUserData);
stateButton.addEventListener('click', () => {
  console.log(globalState.get());
});
