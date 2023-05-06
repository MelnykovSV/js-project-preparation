let instance;

let globalStateObject = {
  favourite: [
    { title: 'title1', test: 'text1' },
    { title: 'title2', test: 'text2' },
    { title: 'title3', test: 'text3' },
  ],
  read: [
    { title: 'title1', test: 'text1' },
    { title: 'title2', test: 'text2' },
    { title: 'title3', test: 'text3' },
  ],
  theme: 'dark',
};

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

  favourites() {
    return globalStateObject.favourites;
  }
  read() {
    return globalStateObject.read;
  }
  theme() {
    return globalStateObject.read;
  }

  setFavourites(value) {
    globalStateObject.favourites = value;
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
}

let globalState = Object.freeze(new StateUtility());
export default globalState;
