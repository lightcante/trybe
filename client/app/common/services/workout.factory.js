/*
* @Author: vincetam
* @Date:   2015-05-06 18:01:45
* @Last Modified by:   justinwebb
* @Last Modified time: 2015-05-11 13:37:53
*/

'use strict';
(function (angular, _) {

  /**
   * Handles auth services for login view
   * @param {[angular]} $http
   * @param {[angular]} $location
   * @param {[angular]} $window
   */
  var WorkoutFactory = function ($http, $location, $window) {
    var workout;
    var workoutSelectionStore = 'com.trybe.selectedWorkout';
    var localStorage = $window.localStorage

    var getWorkouts = function () {
      return $http({
        method: 'GET',
        url: '/api/workouts',
        data: {} // {'ORDERING_CRITERIA_KEY': 'ORDERING_CRITERIA_VALUE'} optional
      })
      .then(function (resp) {
        return resp.data; //sends back data to controller
      });
    };

    var sendWorkout = function(selection) {
      workout = selection;
      localStorage.setItem(this.selection, JSON.stringify(workout));
      console.log('WorkoutFactory\tsendWorkout: ', workout);
    };

    var getWorkout = function() {
      if (workout === undefined) {
        workout = JSON.parse(localStorage.getItem(this.selection));
      }
      return workout;
    }

    return {
      getWorkouts: getWorkouts,
      sendWorkout: sendWorkout,
      getWorkout: getWorkout,
      selection: workoutSelectionStore
    };
  };

angular

  .module('trybe-app.common')

  .factory('WorkoutFactory', WorkoutFactory);

})(angular, _);

