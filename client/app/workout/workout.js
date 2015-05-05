/* 
* @Author: justinwebb
* @Date:   2015-05-04 15:54:33
* @Last Modified by:   justinwebb
* @Last Modified time: 2015-05-05 16:01:16
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
      templateUrl: 'client/app/workout/workout.tpl.html',
      controller: WorkoutCtrl
    });
  };

  /**
   * Controls interactions in workout view.  Enable user to 
   * veiw read only details of workout.  Allows user to
   * record workout results.
   * @param {angular} $scope 
   */
  var WorkoutCtrl = function ($scope) {
    $scope.bar = 'baz';
  };

  // Entry point for module
  angular

    .module('trybe-app.workout', [])

    .config(WorkoutStateConfig)

    .controller('WorkoutCtrl', WorkoutCtrl);

})(angular, _);
