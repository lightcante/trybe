/*
* @Author: justinwebb
* @Date:   2015-05-04 15:54:33
* @Last Modified by:   nimi
* @Last Modified time: 2015-05-11 18:09:03
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
  var FeedCtrl = function ($scope, $location, $state, $window, WorkoutFactory, AuthFactory) {
    $scope.data = {};
    $scope.username = AuthFactory.getUsername();
    console.log('Feed username:', $scope.username);
    // var dummyData =
    //   [
    //     {'username':'Tom','trybe':'HR 26/27','type':'lift','title':'05042015','description':'Build up to 8- rep max of ','exercises':[{'exerciseName':'Bench press','quantity':[3,8],'result':185},{'exerciseName':'Squat','quantity':[2,8],'result':200}],'finalResult':null},
    //     {'username':'Tom','trybe':'HR 26/27','type':'lift','title':'05042015','description':'Build up to 8- rep max of ','exercises':[{'exerciseName':'Bench press','quantity':[3,8],'result':185},{'exerciseName':'Squat','quantity':[2,8],'result':200}],'finalResult':null},
    //     {'username':'Tom','trybe':'HR 26/27','type':'lift','title':'05042015','description':'Build up to 8- rep max of ','exercises':[{'exerciseName':'Bench press','quantity':[3,8],'result':185},{'exerciseName':'Squat','quantity':[2,8],'result':200}],'finalResult':null}
    //   ];

    $scope.getAllWorkouts = function() {
      // $scope.data.workouts = dummyData;
      WorkoutFactory.getWorkouts($scope.username)
        .then(function(data) {
          $scope.data.workouts = data;
          console.log('FeedCtrl\tgetWorkouts: ', $scope.data);
        })
        .catch(function(error) {
          console.error(error);
        });
    };

    $scope.getMyWorkouts = function() {
      WorkoutFactory.getMyWorkouts($scope.username) //change to $scope.userID
        .then(function(data){
          $scope.data.workouts = data;
          console.log('workouts after viewMe called:', $scope.data);
        })
        .catch(function(error){
          console.error(error);
        });
      // $scope.apply();
    };

    //Sends workout data from user's selection to workout
    //module so user can log workout
    $scope.log = function(index) {
      var selection = $scope.data.workouts[index];
      console.log('selected workout:', selection);
      WorkoutFactory.sendWorkout(selection);
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
