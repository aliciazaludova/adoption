// this file's purpose is to build the stuff to write to the dom and to write to the dom
// this usually goes along with buildDomString function because it will need to be printed to the dom
const printToDom = (divId, string) => {
  document.getElementById(divId).innerHTML = string;
};

// in this function i realized the col-sm-4 class had to be within the forEach function, as EACH pet card needs a new column to fall into
const buildDomString = (petArray) => {
  let strang = '';
  strang += `<div class="container">`;
  petArray.forEach(pet => {
    strang += `<div class="col-sm-4">`;
    strang += `<div class="pet-card panel panel-default">`;
    strang += `<img class="pet-image" src="${pet.imageUrl}">`;
    strang += `<h2>${pet.name}</h2>`;
    strang += `<p>${pet.color}</p>`;
    strang += `<p>${pet.specialSkill}</p>`;
    switch (pet.type) {
      case 'cat':
        strang += `<div class="panel-footer green">`;
        break; // look again at what this does
      case 'dog':
        strang += `<div class="panel-footer blue">`;
        break;
      case 'dino':
        strang += `<div class="panel-footer orange">`;
        break;
    }
    strang += `<p>${pet.type}</p>`;
    strang += `</div>`; // panel-footer
    strang += `</div>`;  // pet-card
    strang += `</div>`;  // col-sm-4
  });
  strang += `</div>`; // container
  printToDom('pets', strang);
};

// this makes available the domString that was built here to any file that needs it
module.exports = buildDomString;
