// XHR call for pets.json

const loadPets = (loadFunction, errorFunction) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', loadFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', '../db/pets.json');
  myRequest.send();
};

module.exports = loadPets;

// remember loadFunction + errorFunction are placeholders
// they will manifest as loadPets and defiantPets in data.js
