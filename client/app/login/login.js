/*
* @Author: justinwebb
* @Date:   2015-05-04 15:54:33
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-05 20:07:37
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
        templateUrl: 'login/login.tpl.html',
        controller: LoginCtrl
      })
      // .state('login/signup', {
      //   url: '/signup',
      //   templateUrl: 'login/login.tpl.html',
      //   controller: LoginCtrl
      // });
  };

  /**
   * Controls login and signup for client side. Has
   * states for login and signup.
   * @param {angular} $scope
   */
  var LoginCtrl = function ($scope, $window, $location, AuthFactory) {
    $scope.isUser = true;

    $scope.user = {};

    $scope.signup = function() {
      AuthFactory.signin($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.trybe', token);
          $location.path('/feed');
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    $scope.signin = function() {
      AuthFactory.signup($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.trybe', token);
          $location.path('/feed');
        })
        .catch(function (error) {
          console.error(error);
        });
    };
  };

  // Entry point for module
  angular

    .module('trybe-app.login', ['trybe-app.common']) //can add 'Auth' to array

    .config(LoginConfig)

    .controller('LoginCtrl', LoginCtrl);

})(angular, _);
