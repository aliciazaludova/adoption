// writes to the dom

const printToDom = (petArray, divId) => {
  document.getElementById(divId).innerHTML = petArray;
};

const buildDomString = (petArray) => {
  console.log('pets');
  let strang = '';
  petArray.forEach(pet => {
    strang += `<div class="pet-card">`;
    strang += `<img src="${pet.imageUrl}">`;
    strang += `<h2>${pet.name}</h2>`;
    strang += `<p>${pet.color}</p>`;
    strang += `<p>${pet.specialSkill}</p>`;
    strang += `<p>${pet.type}</p>`;
    strang += `</div>`;
  });
  printToDom(strang, 'pets');
};

module.exports = buildDomString;
