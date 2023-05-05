import stateUtilityInstance from './js/globalState';

stateUtilityInstance.setPropertyValue('addedProp', 'some value');

console.log(stateUtilityInstance.getPropertyByName('addedProp'));
console.log(stateUtilityInstance.getPropertyByName('key1'));
console.log(stateUtilityInstance.getPropertyByName('name2'));

stateUtilityInstance.writeToLocalStorage();
