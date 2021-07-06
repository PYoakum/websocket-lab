const bodyParser 	    = require('body-parser');
const socketApi       = require(__dirname + '/../api/socket.js');

// function used to remove Express headers
const removeTellHeaders = (req, res, next) => {
  res.removeHeader('X-Powered-By');
  next();
}

module.exports = (app, ws, express, cb) => {

  // http server 

  // set body parser for JSON
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // remove headers
  app.use(removeTellHeaders);

  // set view directory
  app.set('views', __dirname + '/../views/pug')
  app.set('view engine', 'pug');

  // set public directory
  app.use('/', express.static('./dist/public/'));

  // websocket server

  ws.on('connection', socketApi.connectionMethods);

  // callback
  cb()

}
