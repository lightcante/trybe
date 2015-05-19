/*
* @Author: justinwebb
* @Date:   2015-05-04 15:54:33
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-18 18:06:54
*/

'use strict';
(function (angular, _) {

  /**
   * Sets viewstate for workout module
   * @param {[type]} $stateProvider [description]
   */
  var WorkoutStateConfig = function ($stateProvider) {

    $stateProvider

      .state('workout', {
        url: '/workout',
        templateUrl: 'workout/workout.tpl.html',
        controller: WorkoutCtrl
      })

      .state('workout.log', {
        views: {
          // Relatively targets the 'log' view in this
          // state's parent state, 'workout',
          // <div ui-view='log'/> inside workout.tpl.html
          log: {}
        }
      })

      .state('workout.create', {
        views: {
          // Relatively targets the 'create' view in this
          // state's parent state, 'workout',
          // <div ui-view='create'/> inside workout.tpl.html
          create: {}
        }
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
      console.log('WorkoutCtrl: ', $scope.workout);
      if (!$scope.workout) { $state.go('feed'); }
    }


    $scope.printWorkoutQuantity = function (exercise) {
      var html = '';
      var quantity = exercise.quantity;
      if (quantity !== null) {
        html = 'Sets: '+ quantity[0] +', Reps: '+ quantity[1];
      }
      return html;
    };
  };

  // Entry point for module
  angular

    .module('trybe-app.workout', [
      'trybe-app.common'
    ])

    .config(WorkoutStateConfig)

    .controller('WorkoutCtrl', WorkoutCtrl);

})(angular, _);
