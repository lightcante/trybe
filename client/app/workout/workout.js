/* 
* @Author: justinwebb
* @Date:   2015-05-04 15:54:33
* @Last Modified by:   justinwebb
* @Last Modified time: 2015-05-08 21:31:57
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
      username: 'Tom',
      trybe: 'CFSF',
      type: 'lift',
      title: '05042015',
      description: 'build up to 8- rep max of ',
      exercises: [
        {
          exerciseName: 'bench press',
          quantity: [3, 8], //[sets, reps]
          result: 185
        },
        {
          exerciseName: 'squat',
          quantity: [2,8],
          result: 200
        }
      ],
      finalResult: null
    };
  };

  // Entry point for module
  angular

    .module('trybe-app.workout', [])

    .config(WorkoutStateConfig)

    .controller('WorkoutCtrl', WorkoutCtrl);

})(angular, _);
