/*
* @Author: nimi
* @Date:   2015-05-05 13:33:15
* @Last Modified by:   VINCE
* @Last Modified time: 2015-05-27 13:10:35
*/

//This file is used to coordinate all the schemas
'use strict';

var Sequelize = require('sequelize');

//initialize database connection
var database = 'trybe' || process.env.DATABASE_NAME;
var username =  'root' || process.env.DATABASE_USERNAME;
// var password = '' || process.env.DATABASE_PASSWORD;
var host = 'localhost' || process.env.DATABASE_HOST;

//change null back to 'password' without quotes
var sequelize = new Sequelize(database, username , null, {
  host: host
});

// load models
var models = ['user', 'workout', 'trybe', 'exercise'];
models.forEach(function(model){
  // sequelize.import will load models that have been defined in other files
  module.exports[model] = sequelize.import(__dirname + '/' + model + 'Schema');
});

// this immediately invoked function will define relationships between models
(function(module){
  module.user.hasMany(module.workout);
  module.workout.belongsTo(module.user);

  module.workout.hasMany(module.exercise);
  module.exercise.belongsTo(module.workout);

  module.trybe.hasMany(module.workout);
  module.workout.belongsTo(module.trybe);

  module.trybe.belongsToMany(module.user, {through : 'UserTrybe'});
  module.user.belongsToMany(module.trybe, {through : 'UserTrybe'});

}(module.exports));

// export connection
module.exports.sequelize = sequelize;
