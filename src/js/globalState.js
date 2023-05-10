import databaseUtils from './firebase/firebaseDatabase';
import authUtils from './firebase/firebaseAuth';
import { INITIAL_STATE_VALUE } from '../constants';

// let instance;

let globalStateObject = JSON.parse(JSON.stringify(INITIAL_STATE_VALUE));

class StateUtility {
  // constructor() {
  //   if (instance) {
  //     throw new Error('New instance cannot be created!!');
  //   }

  //   instance = this;
  //   this.globalStateObject = JSON.parse(JSON.stringify(INITIAL_STATE_VALUE));
  // }

  get() {
    return globalStateObject;
  }

  set(value) {
    globalStateObject = JSON.parse(JSON.stringify(value));
    this.saveData();
  }

  favourite() {
    return globalStateObject.favourite;
  }
  read() {
    return globalStateObject.read;
  }
  theme() {
    return globalStateObject.read;
  }

  setFavourite(value) {
    globalStateObject.favourite = value;
    this.saveData();
  }

  setRead(value) {
    globalStateObject.read = value;
    this.saveData();
  }
  setTheme(value) {
    globalStateObject.theme = value;
    this.saveData();
  }

  writeToLocalStorage() {
    localStorage.setItem('globalState', JSON.stringify(globalStateObject));
  }

  async saveData() {
    const status = await authUtils.isAuthenticated();
    if (status) {
      databaseUtils.writeUserData();
    } else this.writeToLocalStorage();
  }
}

let globalState = Object.freeze(new StateUtility());
export default globalState;
