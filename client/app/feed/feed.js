/*
* @Author: justinwebb
* @Date:   2015-05-04 15:54:33
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-07 21:51:32
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
  var FeedCtrl = function ($scope, FeedFactory) {
    $scope.data = {};
    $scope.renderedWorkouts = {};
    $scope.getWorkouts = function() {
      FeedFactory.getWorkouts()
        .then(function(data) {
          $scope.data.workouts = data.workouts; //array of workouts
          // FeedFactory.renderWorkouts($scope.data.workouts)
          //   .then(function(data)) {
          //     $scope.renderedWorkouts = data;
          //   }
        })
        .catch(function(error) {
          console.error(error);
        });
    };
    $scope.getWorkouts();



  };

  // Entry point for module
  angular

    .module('trybe-app.feed', [])

    .config(FeedStateConfig)

    .controller('FeedCtrl', FeedCtrl);

})(angular, _);
