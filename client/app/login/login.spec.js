/*
* @Author: justinwebb
* @Date:   2015-05-04 16:04:11
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-06 12:23:29
*/

console.log("***Login spec***");

describe('Login Controller', function() {
  beforeEach(module('trybe-app.login'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.isUser', function() {
    it('should be true', function() {
      var $scope = {};
      var controller = $controller('LoginCtrl', { $scope: $scope });
      expect($scope.isUser).toEqual(true);
      var test = true;
      expect(test).toEqual(true);
    });
  });

  // describe('$scope.grade', function() {
  //   it('sets the strength to "strong" if the password length is >8 chars', function() {
  //     var $scope = {};
  //     var controller = $controller('PasswordController', { $scope: $scope });
  //     $scope.password = 'longerthaneightchars';
  //     $scope.grade();
  //     expect($scope.strength).toEqual('strong');
  //   });
  // });

});