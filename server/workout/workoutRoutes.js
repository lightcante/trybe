/*
* @Author: vokoshyv
* @Date:   2015-05-05 09:56:42
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-29 13:45:02
*/
'use strict';
var workoutController = require('./workoutController.js');

module.exports = function(app){
  // this app was injected from the middleware line 34
  console.log('here');
  app.post('/', workoutController.saveWorkout);
  app.get('/all', workoutController.getAllWorkouts);
  app.get('/individual', workoutController.getIndividualWorkout);

};
