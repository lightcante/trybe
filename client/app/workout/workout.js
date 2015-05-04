/* 
* @Author: justinwebb
* @Date:   2015-05-04 15:54:33
* @Last Modified by:   justinwebb
* @Last Modified time: 2015-05-04 16:31:27
*/

'use strict';
(function (angular, _) {

  /**
   * controls application access from the client side. Has
   * states for login and signup.  
   * @param {angular} $scope 
   */
  var WorkoutCtrl = function ($scope) {

  };

  // Entry point for module
  angular

    .module('app', [])

    .controller('WorkoutCtrl', WorkoutCtrl);

})(angular, _);
