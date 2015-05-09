/* 
* @Author: Justin Webb
* @Date:   2015-05-06 11:43:21
* @Last Modified by:   justinwebb
* @Last Modified time: 2015-05-08 21:31:09
*/
'use strict';
(function (angular) {
  
  var link = function (scope, elem, attr) {
    elem.addClass('numstepper');
  };

  var numericStepperCtrl = function ($scope) {

    $scope.val = 0;

    $scope.increment = function () {
      console.log('increment');
      $scope.val++;
    };

    $scope.decrement = function () {
      if ($scope.val > 0) {
        $scope.val--;
      }
    };
  };

  var numericStepperDirective = function () {
    return {
      restrict: 'E',
      scope: {
        min: '=',
        max: '=',
      },
      link: link,
      controller: numericStepperCtrl,
      transclude: true,
      template: ''+
        ' <i class="fa fa-minus fa-3" ng-click="decrement()"></i>'+
        ' <input ng-model="val" type="text" pattern="[0-9]" placeholder="0"></input>'+
        ' <i class="fa fa-plus fa-3" ng-click="increment()"></i>'
    }
  };

  angular
    
    .module('trybe-app.common')

    .directive('numstepper', numericStepperDirective);

})(angular);
