/*
* @Author: vokoshyv
* @Date:   2015-05-05 10:14:44
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-29 13:45:10
*/
'use strict';
//this file will be used to interpret and route http requests

var bodyParser = require('body-parser');
var morgan = require('morgan');

module.exports = function(app, express, passport){

  //Express allows us to use multiple routers with their own
  //configurations
  var userRouter = express.Router();
  var workoutRouter = express.Router();

  //Morgan allows us to automatically log requests and
  //responses
  app.use(morgan('dev'));

  //bodyParser takes in the http requests and attaches
  //the data object to the request.body ("POST" requests)
  //or request.header ("GET" requests);
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  //express.static allows us to look up files in the client
  //folder
  app.use(express.static(__dirname + '/../../client'));

  // use userRouter for user requests
  app.use('/api/users', userRouter);

  // use workoutRouter for workout requests
  app.use('/api/workouts', workoutRouter);

  require('../users/passportConfig.js')(passport);

  // inject routers into their respective route files
  require('../users/userRoutes.js')(userRouter);
  require('../workout/workoutRoutes.js')(workoutRouter);

};
