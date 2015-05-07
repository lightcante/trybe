/* 
* @Author: justinwebb
* @Date:   2015-05-04 15:54:33
* @Last Modified by:   justinwebb
* @Last Modified time: 2015-05-06 10:55:59
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
  var WorkoutCtrl = function ($scope) {

    // dummy workout object
    $scope.workout = {
      username: 'Greg',
      trybe: 'CFSF',
      type: 'benchmark',
      title: 'fran',
      description: 'perform 21-15-9 reps of',
      exercises: [
        {
          exerciseName: '95 lb thrusters',
          quantity: null,
          result: null
        },
        {
          exerciseName: 'pull-ups',
          quantity: null,
          result: null
        },
      ],
      finalResult: {type: 'time', value: 338}
    };
  };

  // Entry point for module
  angular

    .module('trybe-app.workout', [])

    .config(WorkoutStateConfig)

    .controller('WorkoutCtrl', WorkoutCtrl);

})(angular, _);
