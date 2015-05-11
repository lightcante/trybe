/*
* @Author: vincetam
* @Date:   2015-05-05 17:51:40
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-11 11:30:16
*/

'use strict';
(function (angular, _) {

  /**
   * Handles auth services for login view
   * @param {[angular]} $http
   * @param {[angular]} $location
   * @param {[angular]} $window
   */
  var AuthFactory = function ($http, $location, $window) {
    // Authenticates user by exchanging the user's username and password
    // for a JWT from the server
    // that JWT is then stored in localStorage as 'com.trybe'
    var signin = function (user) {
      return $http({
        method: 'POST',
        url: '/api/users/signin',
        data: user
      })
      .then(function (resp) {
        return resp.data; //should receive user token and id
      });
    };

    var signup = function (user) {
      return $http({
        method: 'POST',
        url: '/api/users/signup',
        data: user
      })
      .then(function (resp) {
        return resp.data; //should receive user token and id
      });
    };

    var setUserLocalStorage = function(data) {
      var userJSON = JSON.stringify(data);
      $window.localStorage.setItem('com.trybe', userJSON);
    };

    var getUserID = function() {
      var userJSON = $window.localStorage.getItem('com.trybe');
      var userObj = JSON.parse(userJSON);
      var userID = userObj.userID;
      //for now, we send back username
      var username = userObj.username;
      return username;
    };

    var isAuth = function () {
      return !!$window.localStorage.getItem('com.trybe');
    };

    var signout = function () {
      $window.localStorage.removeItem('com.trybe');
      $location.path('/signin');
    };

    return {
      signin: signin,
      signup: signup,
      setUserLocalStorage: setUserLocalStorage,
      getUserID: getUserID,
      isAuth: isAuth,
      signout: signout
    };
  };

angular

  .module('trybe-app.common')

  .factory('AuthFactory', AuthFactory);

})(angular, _);

