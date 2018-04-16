const domEvents = require('./events');

const outputDiv = document.getElementById('pets');

const domString = (pets) => {
  let strang = '';
  pets.forEach((pet) => {
    strang += `<div class="pet-card"`;
    strang += `<img src="pet">"${pet.imageUrl}">`;
    strang += `<h2>${pet.name}</h2>`;
    strang += `<p>${pet.color}</p>`;
    strang += `<p>${pet.specialSkill}</p>`;
    strang += `<p>${pet.type}</p>`;
    strang += `</div>`;
  });
  return strang;
};

const printToDom = (petArray) => {
  outputDiv.innerHTML = domString(petArray);
  domEvents();
};

module.exports = printToDom;
