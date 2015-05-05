/*
* @Author: vincetam
* @Date:   2015-05-05 10:16:27
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-05 14:45:50
*/

'use strict';

(function (angular, _) {

  /**
   * Sets config for module
   * @param {angular} $stateProvider
   * @param {angular} $urlRouterProvider
   */
  var AppConfig = function($stateProvider, $urlRouterProvider){
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/state1');

    $stateProvider
      .state('state1', {
        url: '/state1',
        templateUrl: 'state1.html',
      })
      .state('state1.list', {
        url: '/list',
        templateUrl: 'state1.list.html',
        controller: AppCtrl
      });
    };

  /**
   * Entry point for application. Loads all client-side dependencies
   * @param {angular} $scope
   */
  var AppCtrl = function($scope) {
    $scope.items = ['A', 'List', 'Of', 'Items'];
  };

  //Entry point for for module
  angular
    .module('trybe-app', ['ui-router', 'ng-animate'])

    .config(AppConfig)

    .controller('AppCtrl', AppCtrl);

})(angular, _);
