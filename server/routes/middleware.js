/* 
* @Author: vokoshyv
* @Date:   2015-05-05 10:14:44
* @Last Modified by:   vokoshyv
* @Last Modified time: 2015-05-05 11:05:50
*/



//this file will be used to interpret and route http requests


var bodyParser = require('body-parser');

module.exports = function(app, express){

  //Express allows us to use multiple routers with their own
  //configurations
  var userRouter = express.Router();
  var workoutRouter = express.Router();

  app.use(boydParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));

  // use userRouter for user requests
  app.use('api/users', userRouter);

  // use workoutRouter for workout requests
  app.use('api/workouts', workoutRouter);

  // inject routers into their respective route files
  require('../users/userRoutes.js')(userRouter);
  require('../workout/workoutRoutes.js')(workoutRouter);

}