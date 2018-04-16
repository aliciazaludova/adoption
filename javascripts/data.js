const loadPets = require('./pets.js');

const printToDom = require('./dom');

let petsArray = [];

const whenPetsLoad = function () {
  petsArray = JSON.parse(this.responseText).pets;
  printToDom(petsArray);
};

const whenPetsDefyU = function () {
  console.error('pets defy u');
};

const initializer = () => {
  loadPets(whenPetsLoad, whenPetsDefyU);
};

const getPets = () => {
  return petsArray;
};

module.exports = {
  initializer,
  getPets,
};
