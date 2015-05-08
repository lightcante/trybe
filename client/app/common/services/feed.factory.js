/*
* @Author: vincetam
* @Date:   2015-05-06 18:01:45
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-07 23:18:33
*/

'use strict';
(function (angular, _) {

  /**
   * Handles auth services for login view
   * @param {[angular]} $http
   * @param {[angular]} $location
   * @param {[angular]} $window
   */
  var FeedFactory = function ($http, $location, $window) {
    var workout;
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

    var sendWorkout = function(workout) {
      console.log('workout sent from feed:', workout);
      workout = workout;
    };

    var getWorkout = function() {
      console.log('workout req from log');
      return workout;
    }

    return {
      getWorkouts: getWorkouts,
      sendWorkout: sendWorkout,
      getWorkout: getWorkout
    };
  };

angular

  .module('trybe-app.common', ['trybe-app.common'])

  .factory('FeedFactory', FeedFactory);

})(angular, _);

