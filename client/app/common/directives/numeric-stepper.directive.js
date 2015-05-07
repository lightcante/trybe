/* 
* @Author: Justin Webb
* @Date:   2015-05-06 11:43:21
* @Last Modified by:   Justin Webb
* @Last Modified time: 2015-05-06 15:44:22
*/
'use strict';
(function (angular) {
  
  var link = function (scope, elem, attr) {

  };

  var numbericStepperCtrl = function ($scope) {

  };

  var numbericStepper = function () {
    return {
      restrict: 'E',
      scope: {
        foo: '='
      },
      transclude: true,
      template: ''+
        '<div class="numbericStepper">'+
        ' <i class="fa fa-minus fa-3"></i>'+
        ' <input type="text" pattern="[0-9]" placeholder="0"></input>'+
        ' <i class="fa fa-plus fa-3"></i>'+
        '</div>',
      link: link,
      controller: numbericStepperCtrl
    }
  };

  angular
    
    .module('trybe-app.common')

    .directive('numberstep', numbericStepper);

})(angular);
