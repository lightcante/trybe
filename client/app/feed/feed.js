/*
* @Author: justinwebb
* @Date:   2015-05-04 15:54:33
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-11 11:37:47
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
    console.log('Feed userID:', $scope.userID);

    $scope.getAllWorkouts = function() {
      FeedFactory.getWorkouts()
        .then(function(data) {
          $scope.data.workouts = data.workouts;
          console.log('feed ctrl data received:', $scope.data.workouts);
        })
        .catch(function(error) {
          console.error(error);
        });
      // $scope.apply();
    };

    $scope.getMyWorkouts = function() {
      //temporary set workouts to null, since not getting server resp
      $scope.data.workouts = null;
      $scope.apply();

      FeedFactory.getMyWorkouts(1) //change to $scope.userID
        .then(function(data){
          $scope.data.workouts = data.workouts;
          console.log('workouts after viewMe called:', $scope.data.workouts);
        })
        .catch(function(error){
          console.error(error);
        });
    };

    //Sends workout data from user's selection to workout
    //module so user can log workout
    $scope.log = function(index) {
      var selection = $scope.data.workouts[index];
      console.log('selected workout:', selection);
      FeedFactory.sendWorkout(selection);
      $state.go('workout');
    };

    $scope.getAllWorkouts();

  };

  // Entry point for module
  angular

    .module('trybe-app.feed', ['trybe-app.common'])

    .config(FeedStateConfig)

    .controller('FeedCtrl', FeedCtrl);

})(angular, _);
