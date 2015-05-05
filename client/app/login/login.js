/*
* @Author: justinwebb
* @Date:   2015-05-04 15:54:33
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-05 15:58:39
*/

'use strict';
(function (angular, _) {

  var LoginConfig = function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: '/login/login.tpl.html',
        controller: LoginCtrl
      })
      .state('signup', {
        url: '/signup',
        templateUrl: '/login/login.tpl.html',
        controller: LoginCtrl
      });

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/login');
  };

  /**
   * controls application access from the client side. Has
   * states for login and signup.
   * @param {angular} $scope
   */
  var LoginCtrl = function ($scope) {

  };

  // Entry point for module
  angular

    .module('app', [])

    .controller('LoginCtrl', LoginCtrl);

})(angular, _);
