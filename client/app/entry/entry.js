/* 
* @Author: justinwebb
* @Date:   2015-05-04 15:54:33
* @Last Modified by:   justinwebb
* @Last Modified time: 2015-05-04 16:27:38
*/

'use strict';
(function (angular, _) {

  /**
   * controls application access from the client side. Has
   * states for login and signup.  
   * @param {angular} $scope 
   */
  var EntryCtrl = function ($scope) {

  };

  // Entry point for module
  angular

    .module('app', [])

    .controller('EntryCtrl', EntryCtrl);

})(angular, _);
