let instance;

let globalState = {
  key1: 'value1',
};

class StateUtility {
  constructor() {
    if (instance) {
      throw new Error('New instance cannot be created!!');
    }

    instance = this;
  }

  getState() {
    return globalState;
  }

  getPropertyByName(name) {
    return globalState[name];
  }

  setPropertyValue(name, value) {
    globalState[name] = value;
  }

  writeToLocalStorage() {
    localStorage.setItem('globalState', JSON.stringify(globalState));
  }
}

let stateUtilityInstance = Object.freeze(new StateUtility());
export default stateUtilityInstance;
