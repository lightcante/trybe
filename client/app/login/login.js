/*
* @Author: justinwebb
* @Date:   2015-05-04 15:54:33
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-05 16:59:58
*/

'use strict';
(function (angular, _) {

  /**
   * Sets viewstate for login page
   * @param {[angular]} $stateProvider
   */
  var LoginConfig = function($stateProvider) {

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'client/app/login/login.tpl.html',
        controller: LoginCtrl
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'client/app/login/login.tpl.html',
        controller: LoginCtrl
      });
  };

  /**
   * Controls login and signup for client side. Has
   * states for login and signup.
   * @param {angular} $scope
   */
  var LoginCtrl = function ($scope) {
    $scope.isUser = true;
    $scope.username;
    $scope.password;
  };

  // Entry point for module
  angular

    .module('trybe-app.login', [])

    .config(LoginConfig)

    .controller('LoginCtrl', LoginCtrl);

})(angular, _);
