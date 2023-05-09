import globalState from './globalState';
import authUtils from './firebase/firebaseAuth';

const authComponent = document.querySelector('.auth-component');
const signUpForm = document.querySelector('.sign-up-form');
const signInForm = document.querySelector('.sign-in-form');

const testButton = document.querySelector('.test-button');
const stateButton = document.querySelector('.state-button');

authUtils.authSentry();

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

testButton.addEventListener('click', () => {
  authUtils.getCurrentUserId();
});
stateButton.addEventListener('click', () => {
  console.log(globalState.get());
});

const stateManipulator = document.querySelector('.state-manipulator');

stateManipulator.addEventListener('click', e => {
  switch (e.target.className) {
    case 'add-to-favourite':
      globalState.setFavourite([
        ...globalState.favourite(),
        {
          title: 'some title',
          text: 'some text',
        },
      ]);

      break;
    case 'remove-from-favourite': {
      const newState = globalState.favourite();
      newState.pop();
      globalState.setFavourite(newState);
      break;
    }
    case 'add-to-read':
      globalState.setRead([
        ...globalState.read(),
        {
          title: 'some title',
          text: 'some text',
        },
      ]);
      break;
    case 'remove-from-read': {
      const newState1 = globalState.read();
      newState1.pop();
      globalState.setRead(newState1);
      break;
    }
    case 'light-theme':
      globalState.setTheme('light');
      break;
    case 'dark-theme':
      globalState.setTheme('dark');
      break;
    case 'other-theme':
      globalState.setTheme('other');
      break;
  }
});
