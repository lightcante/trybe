/* 
* @Author: nimi
* @Date:   2015-05-05 13:33:15
* @Last Modified by:   nimi
* @Last Modified time: 2015-05-05 14:31:33
*/

//This file is used to coordinate all the schemas
'use strict';

var Sequelize = require('sequelize'); 

//initialize database connection
var sequelize = new Sequelize('trybe'); 

// TODO: add trybes, as per database design

// load models
var models = ['user', 'workout', 'trybe', 'exercise']; 
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

  module.Trybes.hasMany(module.Workouts);
  module.Workouts.belongsTo(module.Trybes);

  module.Trybes.hasMany(module.Users, {through : UsersTrybes});
  module.Users.hasMany(module.Trybes, {through : UsersTrybes});

}(module.exports));

// export connection
module.exports.sequelize = sequelize; 