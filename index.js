#!/usr/bin/env node
require('dotenv').config();;
const fs              = require('fs');
const path 	          = require('path');
const http 		        = require('http');
const express 		    = require('express');

// create route types
const app 			      = express();
const initServer      = require('./src/server/init.js');
const routesUrls      = require('./src/routes/urls.js');
const routesApply     = require('./src/routes/apply.js');

initServer( http, app, (server, ws)=>{

  routesApply( app, ws, express, ()=>{

      // serve route index
      routesUrls( app, ws );

  })

});
