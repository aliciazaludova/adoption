// this file error and success functions for XHR

const loadPets = require('./pets');
// ./pets is pets.js which has initial xhr function which calls the below functions

const buildDomString = require('./dom');
// need domString here. why? because it is called  in whenPetsLoad

// not totally certain how this is needed here
const events = require('./events');

// this is going to be an argument taking the place of a parameter in the loadPets function
// it has a bunch of stuff happening
// it is parsing the data from json file
// once parsed it is called in buildDomString
// ??? need help understanding the two events calls
const whenPetsLoad = function () {
  const data = JSON.parse(this.responseText).pets;
  buildDomString(data);
  events.addEventListener(data);
  events.showAllPets(data);
};

// this is going to be the other argument in the loadPets call
const whenPetsDefyU = function () {
  alert('pets defy u');
};

// this initializes stuff upon page load
const initializer = () => {
  loadPets(whenPetsLoad, whenPetsDefyU);
};

// this makes the initializer function available to other files. initializer is the culmination of this file.
module.exports = initializer;
