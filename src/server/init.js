const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const morgan = require('morgan');
const io     = require('socket.io')

const config  = {
    web_local       : process.env.LOCAL,
    web_port        : process.env.WEBPORT
}

module.exports = (http, app, cb) => {
    if(config.web_local=='production'){

        if (cluster.isMaster) {
            console.log(`master ${process.pid} is running...`);
            for (let i = 0; i < numCPUs; i++) {
              cluster.fork();
            }
            cluster.on('exit', (worker, code, signal) => {
              console.log(`worker ${worker.process.pid} died`.red);
            });
        } else {
          let server = http.createServer(app).listen(config.web_port);
          let ws = io(server);
          console.log(`worker ${process.pid} started`);
          cb(server, ws);
        }

      // if development mode start development mode :P
    } else if(config.web_local=='development'){
        app.use(morgan('dev'))
        let server = http.createServer(app).listen(config.web_port);
        let ws = io(server);
        console.log('...starting'+' Development '+'server on port '+String(config.web_port));
        cb(server, ws);
    }
}