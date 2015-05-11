/*
* @Author: justinwebb
* @Date:   2015-05-04 15:54:33
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-11 11:03:48
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
      });
  };

  /**
   * Controls login and signup for client side. Has
   * states for login and signup.
   * @param {angular} $scope
   */
  var LoginCtrl = function ($scope, $window, $state, AuthFactory) {
    $scope.switchMethod = function() {
      $scope.newUser = !$scope.newUser;
    };

    $scope.newUser = true;

    $scope.user = {};

    $scope.signup = function() {
      AuthFactory.signup($scope.user)
        .then(function (data) {
          console.log('data received:', data);
          AuthFactory.setUserLocalStorage(data);
          $state.go('feed');
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    $scope.signin = function() {
      AuthFactory.signin($scope.user)
        .then(function (data) {
          console.log('*data received:', data);
          //stringify obj to store into local storage
          AuthFactory.setUserLocalStorage(data);
          $state.go('feed');

        })
        .catch(function (error) {
          console.error(error);
        });
    };
  };

  // Entry point for module
  angular

    .module('trybe-app.login', ['trybe-app.common'])

    .config(LoginConfig)

    .controller('LoginCtrl', LoginCtrl);

})(angular, _);
