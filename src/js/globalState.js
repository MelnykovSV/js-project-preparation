import databaseUtils from './firebaseDatabase';
import authUtils from './firebaseAuth';
import { INITIAL_STATE_VALUE } from '../constants';

let instance;

let globalStateObject = INITIAL_STATE_VALUE;

class StateUtility {
  constructor() {
    if (instance) {
      throw new Error('New instance cannot be created!!');
    }

    instance = this;
  }

  get() {
    return globalStateObject;
  }

  set(value) {
    globalStateObject = value;
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

  async setFavourite(value) {
    globalStateObject.favourite = value;
    this.saveData();
  }

  setRead(value) {
    globalStateObject.read = value;
  }
  setTheme(value) {
    globalStateObject.theme = value;
  }

  writeToLocalStorage() {
    localStorage.setItem('globalState', JSON.stringify(globalStateObject));
  }

  async saveData() {
    const status = await authUtils.isAuthenticated();
    console.log(status);
    if (status) {
      databaseUtils.writeUserData();
    } else this.writeToLocalStorage();
  }
}

let globalState = Object.freeze(new StateUtility());
export default globalState;
