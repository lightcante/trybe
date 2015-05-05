/* 
* @Author: nimi
* @Date:   2015-05-05 13:33:15
* @Last Modified by:   nimi
* @Last Modified time: 2015-05-05 13:34:39
*/

//This file is used to coordinate all the schemas
'use strict';

var Sequelize = require('sequelize'); 

//initialize database connection
var sequelize = new Sequelize('trybe'); 

// TODO: add trybes, as per database design

// load models
var models = ['user', 'workout', 'trybes']; 
models.forEach(function(model){
  // sequelize.import will load models that have been defined in other files
  module.exports[model] = sequelize.import(__dirname + '/' + model + 'Schema');
}); 

// this immediately invoked function will define relationships between models
(function(module){
  module.Users.hasMany(module.Workouts);
  module.Workouts.belongsTo(module.Users);

  module.Workouts.hasMany(module.Exercises);
  module.Exercises.belongsTo(module.Workouts);

}(module.exports));

// export connection
module.exports.sequelize = sequelize; 