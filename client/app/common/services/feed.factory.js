/*
* @Author: vincetam
* @Date:   2015-05-06 18:01:45
* @Last Modified time: 2015-05-11 10:33:41
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
        url: '/api/workouts', //change to all
        data: {}
      })
      .then(function (resp) {
        return resp.data; //sends back data to controller
      });
    };

    var getMyWorkouts = function(userID) {
      return $http({
        method: 'GET',
        url: '/api/workouts/individual',
        data: { 'x-access-userID': userID }
      })
      .then(function (resp) {
        console.log('getMyWorkout factory resp:', resp);
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
    };

    return {
      getWorkouts: getWorkouts,
      getMyWorkouts: getMyWorkouts,
      sendWorkout: sendWorkout,
      getWorkout: getWorkout
    };
  };

angular

  .module('trybe-app.common')

  .factory('FeedFactory', FeedFactory);

})(angular, _);

