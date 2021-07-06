const renderHome     = require('../views/home.js');

module.exports = (app) => {

  console.log('applying view routes')

  // homepage
  app.get( '/', renderHome  )

}
