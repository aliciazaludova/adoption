// this is the XHR call for pets.json
// parameters for load and error
// i think they will manifest as whenPetsLoad and defiantPets in data.js
// holds the request in var myRequest
// eventListeners for when page loads so function will function right away and for error
// GETs the data from the json file
// open and send -- ???
const loadPets = (loadFunction, errorFunction) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', loadFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', '../db/pets.json');
  myRequest.send();
};

// exports, or makes available this function to any other file that needs it
module.exports = loadPets;
