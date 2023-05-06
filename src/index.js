import globalState from './js/globalState';

import authUtils from './js/firebase';

const authComponent = document.querySelector('.auth-component');
const signUpForm = document.querySelector('.sign-up-form');
const signInForm = document.querySelector('.sign-in-form');

const testButton = document.querySelector('.test-button');

authUtils.checkUserStatus();

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

// testButton.addEventListener('click', authUtils.getCurrentUser);
