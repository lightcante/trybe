/* 
* @Author: justinwebb
* @Date:   2015-05-04 15:54:33
* @Last Modified by:   justinwebb
* @Last Modified time: 2015-05-11 13:44:04
*/

'use strict';
(function (angular, _) {

  /**
   * Sets viewstate for workout module
   * @param {[type]} $stateProvider [description]
   */
  var WorkoutStateConfig = function ($stateProvider) {
    
    $stateProvider.state('workout', {
      url: '/workout',
      templateUrl: 'workout/workout.tpl.html',
      controller: WorkoutCtrl
    });
  };

  /**
   * Controls interactions in workout view.  Enables user to 
   * veiw read only details of workout.  Allows user to
   * record workout results.
   * @param {angular} $scope 
   */
  var WorkoutCtrl = function ($scope, $state, AuthFactory, WorkoutFactory) {

    if (!AuthFactory.isAuth()) {
      $state.go('login');
    }
    else {
      // dummy workout object
      $scope.workout = WorkoutFactory.getWorkout();
      if (!$scope.workout) { $state.go('feed'); }
      console.log('WorkoutCtrl: ', $scope.workout);
    }

    // $scope.editState = 1;
  };

  // Entry point for module
  angular

    .module('trybe-app.workout', [
      'trybe-app.common'
    ])

    .config(WorkoutStateConfig)

    .controller('WorkoutCtrl', WorkoutCtrl);

})(angular, _);
