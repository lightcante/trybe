/*
* @Author: VINCE
* @Date:   2015-05-08 11:11:52
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-11 10:57:12
*/

'use strict';
(function (angular, _) {

  /**
   * Sets viewstate for profile page
   * @param {[angular]} $stateProvider
   */
  var ProfileConfig = function($stateProvider) {

    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'profile/profile.tpl.html',
        controller: ProfileCtrl
      });
  };

  /**

   * Controls profile for client side.
   * @param {angular} $scope
   */
  var ProfileCtrl = function ($scope, $window, $state, AuthFactory, FeedFactory) {
    $scope.foo = 'bar';
    $scope.data = {};

    $scope.getUserData = function() {
      FeedFactory.getWorkouts()
        .then(function(data){
          $scope.data.workouts = data.workouts;
          console.log($scope.data.workouts);
        })
        .catch(function(error) {
          console.error(error);
        });
    };
    $scope.getUserData();


  };

  // Entry point for module
  angular

    .module('trybe-app.profile', ['trybe-app.common'])

    .config(ProfileConfig)

    .controller('ProfileCtrl', ProfileCtrl);

})(angular, _);
