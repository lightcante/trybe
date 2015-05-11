/*
* @Author: justinwebb
* @Date:   2015-05-04 15:54:33
* @Last Modified by:   VINCE
* @Last Modified time: 2015-05-10 17:43:52
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
  var FeedCtrl = function ($scope, $location, $state, $window, FeedFactory, AuthFactory) {
    $scope.data = {};
    $scope.userID = AuthFactory.getUserID();
    console.log('Feed ctrl userID:', $scope.userID);
    $scope.view = 'all';

    $scope.getWorkouts = function() {
      FeedFactory.getWorkouts()
        .then(function(data) {
          $scope.data.workouts = data.workouts;
          console.log('feed ctrl data received:', $scope.data.workouts);
        })
        .catch(function(error) {
          console.error(error);
        });
    };
    $scope.getWorkouts();

    $scope.getMyWorkouts = function() {
      FeedFactory.getMyWorkouts(1) //change to $scope.userID
        .then(function(data){
          $scope.data.workouts = data.workouts;
          console.log('workouts after viewMe called:', $scope.data.workouts);
        })
        .catch(function(error){
          console.error(error);
        });
    };

    $scope.getAllWorkouts = function() {
      $state.go('feed');
    };

    $scope.viewFilter = function(workout) {
      if($scope.view === 'me') {
        //later change $scope.view to own username
        return (workout.username === $scope.view);
      } else {
        return true;
      }
    };

    //Sends workout data from user's selection to workout
    //module so user can log workout
    $scope.log = function(index) {
      var selection = $scope.data.workouts[index];
      console.log('selected workout:', selection);
      FeedFactory.sendWorkout(selection);
      $state.go('workout');
    };

  };

  // Entry point for module
  angular

    .module('trybe-app.feed', [])

    .config(FeedStateConfig)

    .controller('FeedCtrl', FeedCtrl);

})(angular, _);
