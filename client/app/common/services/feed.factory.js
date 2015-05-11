/*
* @Author: vincetam
* @Date:   2015-05-06 18:01:45
* @Last Modified by:   justinwebb
* @Last Modified time: 2015-05-11 10:03:51
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

    var sendWorkout = function(selection) {
      console.log('workout sent from feed:', selection);
      workout = selection;
      console.log('FeedFactory workout var:', workout);
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

  .module('trybe-app.common')

  .factory('FeedFactory', FeedFactory);

})(angular, _);

