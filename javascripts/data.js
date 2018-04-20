// error and success functions for XHR

const loadPets = require('./pets');
// ./pets is pets.js which has initial xhr function which calls the below functions

const buildDomString = require('./dom');
// need domString because it is here that it is used in printToDom

const events = require('./events');

const whenPetsLoad = function () {
  const data = JSON.parse(this.responseText).pets;
  buildDomString(data);
  events.addEventListener(data);
  events.showAllPets(data);
};

const whenPetsDefyU = function () {
  alert('pets defy u');
};

const initializer = () => {
  loadPets(whenPetsLoad, whenPetsDefyU);
};

module.exports = initializer;
