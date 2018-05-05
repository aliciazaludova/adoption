// entry point / start application
// after all that this is the "entry point"?
// a little confusing that initializer looks like a new var here and is also a new var on the data page
const initializer = require('./data');

const startApplication = () => {
  initializer();
};

startApplication();
