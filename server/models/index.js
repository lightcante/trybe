/* 
* @Author: nimi
* @Date:   2015-05-05 13:33:15
* @Last Modified by:   nimi
* @Last Modified time: 2015-05-08 12:40:47
*/

//This file is used to coordinate all the schemas
'use strict';

var Sequelize = require('sequelize'); 

//initialize database connection
var sequelize = new Sequelize('trybe', 'root' , null); 

// TODO: add trybes, as per database design

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
