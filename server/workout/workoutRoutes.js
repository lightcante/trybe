/* 
* @Author: vokoshyv
* @Date:   2015-05-05 09:56:42
* @Last Modified by:   vokoshyv
* @Last Modified time: 2015-05-06 10:32:01
*/
'use strict';
var workoutController = require('./workoutController.js');

module.exports = function(app){
  // this app was injected from the middleware line 34
  console.log('here');
  app.post('/', workoutController.saveWorkout);
  app.get('/', workoutController.getAllWorkouts);

};