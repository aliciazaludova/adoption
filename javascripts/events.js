// the domString is needed here because we are working with the pet.type here
const buildDomString = require('./dom');

// the buttons are going to need 'click' eventListeners
// get them ready here by locating each by its ID
// give each a var in order to work with it later
// work with it later means creating the click events
// addEventListener contains a lot of stuff. this is scary.
const addEventListener = (pets) => {
  const catButton = document.getElementById('cat-btn');
  const dogButton = document.getElementById('dog-btn');
  const dinoButton = document.getElementById('dino-btn');

  // need help understanding these functions' syntax
  // is addEventListener a built-in something?
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
  // petType is a newly made-up parameter here. when called will hold the actual key from the json object
  const filterPets = (petType) => {
    // need array to push these new specific lists of pets to
    const newPetArray = [];
    // pets is the name of the json object. now go through and target the key "type"
    // throw only these types of pets into the new array we want to see
    // i am a little confused as to how buildDomString takes a whole new array as well as the original one
    pets.forEach(pet => {
      if (pet.type === petType) {
        newPetArray.push(pet);
      };
    });
    buildDomString(newPetArray);
  };
};

// need button to get back to showing all pets
// the domString is taking the original data again?
const showAllPets = (pets) => {
  const showAllPetsBtn = document.getElementById('show-all-pets');
  showAllPetsBtn.addEventListener('click', () => {
    buildDomString(pets);
  });
};

// both eventListener functions are made available
module.exports = {
  addEventListener,
  showAllPets,
};
