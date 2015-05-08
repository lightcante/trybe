/*
* @Author: VINCE
* @Date:   2015-05-08 11:22:42
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-11 11:19:47
*/

'use strict';
(function (angular, _) {

  /**
   * Handles auth services for login view
   * @param {[angular]} $http
   * @param {[angular]} $location
   * @param {[angular]} $window
   */
  var ProfileFactory = function ($http, $location, $window) {

    var findSameLifts = function(data, exercise, reps) {
      console.log('Profile Factory findSameLifts called');
      var results = [];
      //search through workouts from user
      for(var i = 0; i < data.length; i++) {
        //if the type of workout is a lift
        if(data[i].type === 'lift') {
          //look through exercises in the workout
          for(var n = 0; n < data[i].exercises.length; n++) {
            //see if its exercise name is same
            if(data[i].exercises[n].exerciseName === exercise) {
              //then check if reps are same
              if(data[i].exercises[n].quantity[1] === reps) {
                //save data
                results.push(data[i].exercises[n].result);
              }
            }
          }
        }
      }
      console.log('Profile Factory resuts:', results);
      return results;
    };

    return {
      findSameLifts: findSameLifts
    };
  };

angular

  .module('trybe-app.common')

  .factory('ProfileFactory', ProfileFactory);

})(angular, _);
