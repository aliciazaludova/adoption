// I need the built up string from dom.js
const buildDomString = require('./dom');

// attach event listeners

// a var to hold each eListener--1 for each type of pet
// pets is a placeholder
const addEventListener = (pets) => {
  const catButton = document.getElementById('cat-btn');
  const dogButton = document.getElementById('dog-btn');
  const dinoButton = document.getElementById('dino-btn');

  catButton.addEventListener('click', () => {
    filterPets('cat');
  });

  dogButton.addEventListener('click', () => {
    filterPets('dog');
  });

  dinoButton.addEventListener('click', () => {
    filterPets('dino');
  });

  // function to filter to cats or dogs or dinos
  // petType is parameter here. when called will hold the actual key from the json object
  const filterPets = (petType) => {
    // need array to push ____ to
    const newPetArray = [];
    // pets is the name of the json object. now go through and target the key "type"
    // throw only these types of pets into the new array we want to see
    pets.forEach(pet => {
      if (pet.type === petType) {
        newPetArray.push(pet);
      };
    });
    buildDomString(newPetArray);
  };
};

const showAllPets = (pets) => {
  const showAllPetsBtn = document.getElementById('show-all-pets');
  showAllPetsBtn.addEventListener('click', () => {
    buildDomString(pets);
  });
};

module.exports = {
  addEventListener,
  showAllPets,
};
