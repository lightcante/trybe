/*
* @Author: VINCE
* @Date:   2015-05-08 11:22:42
* @Last Modified by:   VINCE
* @Last Modified time: 2015-05-08 11:30:39
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
    var showProgress = function(workoutData) {

    };

    return {
      showProgress: showProgress
    };
  };

angular

  .module('trybe-app.common')

  .factory('ProfileFactory', ProfileFactory);

})(angular, _);