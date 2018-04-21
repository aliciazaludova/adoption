// writes to the dom
const printToDom = (divId, string) => {
  document.getElementById(divId).innerHTML = string;
};

const buildDomString = (petArray) => {
  let strang = '';
  strang += `<div class="container">`;
  strang += `<div class="row">`;
  petArray.forEach(pet => {
    strang += `<div class="col-sm-4">`;
    strang += `<div class="pet-card panel panel-default">`;
    strang += `<img class="pet-image" src="${pet.imageUrl}">`;
    strang += `<h2>${pet.name}</h2>`;
    strang += `<p>${pet.color}</p>`;
    strang += `<p>${pet.specialSkill}</p>`;
    strang += `<p>${pet.type}</p>`;
    strang += `</div>`;
    strang += `</div>`;
  });
  strang += `</div>`;
  strang += `</div>`;
  printToDom('pets', strang);
};

module.exports = buildDomString;
