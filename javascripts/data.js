const loadPets = require('./pets.js');

const printToDom = require('./dom');

let petArray = [];

const whenPetsLoad = function () {
  petArray = JSON.parse(this.responseText).pets;
  printToDom(petArray);
};

const whenPetsDefyU = function () {
  console.error('pets defy u');
};

const initializer = () => {
  loadPets(whenPetsLoad, whenPetsDefyU);
};

const getPets = () => {
  return petArray;
};

module.exports = {
  initializer,
  getPets,
};
