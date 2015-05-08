/*
* @Author: justinwebb
* @Date:   2015-05-04 15:54:33
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-07 23:19:29
*/

'use strict';
(function (angular, _) {

  /**
   * Sets viewstate for workout module
   * @param {[type]} $stateProvider [description]
   */
  var FeedStateConfig = function ($stateProvider) {
    $stateProvider.state('feed', {
      url: '/feed',
      templateUrl: 'feed/feed.tpl.html',
      controller: FeedCtrl
    });
  };

  /**
   * controls feed state from client side
   * @param {angular} $scope
   */
  var FeedCtrl = function ($scope, $location, $state, FeedFactory) {
    $scope.data = {};
    $scope.getWorkouts = function() {
      FeedFactory.getWorkouts()
        .then(function(data) {
          $scope.data.workouts = data.workouts;
          console.log($scope.data.workouts);
        })
        .catch(function(error) {
          console.error(error);
        });
    };
    $scope.getWorkouts();

    $scope.log = function(index) {
      var selection = $scope.data.workouts[index];
      console.log("selected workout:", selection);
      FeedFactory.sendWorkout(selection);
      $state.go('workout');
    }



  };

  // Entry point for module
  angular

    .module('trybe-app.feed', [])

    .config(FeedStateConfig)

    .controller('FeedCtrl', FeedCtrl);

})(angular, _);
