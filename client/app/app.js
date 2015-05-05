/*
* @Author: vincetam
* @Date:   2015-05-05 10:16:27
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-05 14:13:02
*/

'use strict';

(function (angular, _) {

  var AppConfig = function($stateProvider, $urlRouterProvider){
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/state1");

    $stateProvider
      .state('state1', {
        url: "/state1",
        templateUrl: "state1.html",
      })
      .state('state1.list', {
        url: "/list",
        templateUrl: "state1.list.html",
        controller: function AppCtrl($scope) {
          $scope.items = ["A", "List", "Of", "Items"];
        }
      })
    };

  var AppCtrl = function($scope) {

  };

  //Entry point for for module
  angular
    .module('trybe-app', ['ui-router', 'ng-animate'])

    .config(AppConfig)

    .controller('AppCtrl', AppCtrl)

})(angular, _);
