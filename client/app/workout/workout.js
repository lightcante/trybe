/*
* @Author: justinwebb
* @Date:   2015-05-04 15:54:33
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-18 23:03:33
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
      $scope.workout = WorkoutFactory.getWorkout();
      $scope.isCreatingWorkout = WorkoutFactory.isCreatingWorkout() !== false;
    }

    $scope.createWorkout = function(type) {
      $scope.exerciseCount = 0;
      $scope.temp = {};
      var workout = {
        'username':null, //handled later
        'trybe':'HR 26/27',
        'type':type,
        'title':null,
        'description':null,
        'exercises':[
          // {
          //   'exerciseName': null,
          //   'quantity': [],
          //   'result': null
          // }
        ],
        'finalResult':{'type': null,'value': null}
      };

      if(type === 'lift') {
      } else if(type === 'metcon') {
      } else if (type === 'benchmark') {
      }

      $scope.workout = workout;
    };

    $scope.addExercise = function() {
      //Set ex, sets, and reps to workout obj
      $scope.workout.exercises.push({
        exerciseName: null,
        quantity: [],
        result: null
      });
      var currentEx = $scope.workout.exercises[$scope.exerciseCount];
      currentEx.exerciseName = $scope.temp.exName;
      currentEx.quantity[0] = Number($scope.temp.currentSets);
      currentEx.quantity[1] = Number($scope.temp.currentReps);
      $scope.exerciseCount++;
      console.log('updated workouts obj', $scope.workout);

      //Reset temp variables
      $scope.temp.exName = null;
      $scope.temp.currentSets = null;
      $scope.temp.currentReps = null;
    };

    $scope.printWorkoutQuantity = function (exercise) {
      var html = '';
      var quantity = exercise.quantity; //delete if works
      if (quantity !== null) {
        html = quantity[0] +' Sets, ' + quantity[1] + ' Reps';
      }
      return html;
    };

    $scope.log = function() {
      $scope.workout.username = AuthFactory.getUsername();
      WorkoutFactory.postWorkout($scope.workout);
      $state.go('feed');
    };

    if($scope.isCreatingWorkout) {
      $scope.createWorkout();
    }
  };

  // Entry point for module
  angular

    .module('trybe-app.workout', [
      'trybe-app.common'
    ])

    .config(WorkoutStateConfig)

    .controller('WorkoutCtrl', WorkoutCtrl);

})(angular, _);
