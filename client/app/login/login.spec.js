/*
* @Author: justinwebb
* @Date:   2015-05-04 16:04:11
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-06 14:49:10
*/

describe('Login Controller', function() {
  beforeEach(module('trybe-app.login'));

    var ctrl, scope;

    beforeEach(inject(function($controller, $rootscope){
      // Create a new scope that's a child of the $rootScope
      scope = $rootScope.$new();
      // Create the controller
      ctrl = $controller('LoginCtrl', {
        $scope: scope
      });
    }));

    // it('should have a $scope.isUser var set to true', function() {
    //   expect($scope.isUser).toEqual(true);
    // });

    // it('should have signin and signup functions', function() {
    //   expect($scope.signin).to.be.a('function');
    //   expect($scope.signup).to.be.a('function');
    // });

    describe('$scope.isUser', function() {
      it('is set to true', function() {
        // var $scope = {};
        // var controller = $controller('LoginCtrl', { $scope: $scope });
        expect($scope.isUser).toEqual(true);
        expect(false).toEqual(true);
      });
    });

});
