/*
* @Author: justinwebb
* @Date:   2015-05-04 15:54:33
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-28 09:40:56
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
    } else {
      $scope.isCreatingWorkout = WorkoutFactory.isCreatingWorkout() !== false;
    }

    $scope.createWorkout = function(type) {
      type = type || 'lift';
      $scope.exerciseCount = 0;
      $scope.temp = {};
      var workout = {
        'username':null, //handled later
        'trybe':'HR 26/27',
        'type':type,
        'title':null,
        'description':null,
        'exercises':[],
        'finalResult':{
          'type': (type !== 'lift') ? 'time' : null,
          'value': null
        }
      };
      workout.exercises.push({
        exerciseName: null,
        quantity: [],
        result: null
      });

      //Initialize placeholder suggestions
      $scope.placeholders = {};
      if(type === 'lift') {
        $scope.placeholders.instructions = 'Build up to 5-rep max of:';
        $scope.placeholders.exercise = 'Bench';
      } else if(type !== 'lift') {
        $scope.placeholders.instructions = 'Perform 21, 15, 9 reps of:';
        $scope.placeholders.exercise = 'Pull ups';
      }

      $scope.workout = workout;
      console.log('workout module obj', $scope.workout);
    };

    $scope.addExercise = function() {
      //Set ex, sets, and reps to workout obj
      $scope.workout.exercises.push({
        exerciseName: null,
        quantity: [],
        result: null
      });

      $scope.exerciseCount++;
      console.log('updated workouts obj', $scope.workout);
    };

    $scope.printWorkoutQuantity = function (exercise) {
      var html = '';
      var quantity = exercise.quantity; //delete if works
      if (quantity !== null) {
        html = quantity[0] +' Sets, ' + quantity[1] + ' Reps';
      }
      return html;
    };

    $scope.setResultType = function(type) {
      $scope.workout.finalResult.type = type;
    };

    $scope.log = function() {
      //If user inputs a new exercise, add for them
      if($scope.temp && $scope.temp.exName) {
        $scope.addExercise();
      }

      //If user set a final result value, save for them
      if($scope.temp && $scope.temp.finalResult) {
        $scope.workout.finalResult.value = $scope.temp.finalResult;
      }

      //Update workout's username entry, then post
      $scope.workout.username = AuthFactory.getUsername();
      WorkoutFactory.postWorkout($scope.workout);
      $state.go('feed');
    };

    //Initialize workout for log
    if($scope.isCreatingWorkout) {
      $scope.createWorkout();
    } else {
      $scope.workout = WorkoutFactory.getWorkout();
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
