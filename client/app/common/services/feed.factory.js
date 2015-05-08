/*
* @Author: vincetam
* @Date:   2015-05-06 18:01:45
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-07 21:39:04
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

    var renderWorkouts = function (workouts) {
      //for each workout in the array of workouts
      //change date to a string
      for(var i = 0; i < workouts.length; i++) {
        //render data to be more readable
      }
    };

    return {
      getWorkouts: getWorkouts,
      renderWorkouts: renderWorkouts
    };
  };

angular

  .module('trybe-app.common', ['trybe-app.common'])

  .factory('FeedFactory', FeedFactory);

})(angular, _);

