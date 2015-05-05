/* 
* @Author: justinwebb
* @Date:   2015-05-04 15:54:33
* @Last Modified by:   justinwebb
* @Last Modified time: 2015-05-05 15:42:06
*/

'use strict';
(function (angular, _) {

  /**
   * Sets viewstate for workout module
   * @param {[type]} $stateProvider [description]
   */
  var FeedStateConfig = function ($stateProvider) {
    
    $stateProvider.state('feed', {
      url: '/feed',
      templateUrl: 'client/app/feed/feed.tpl.html',
      controller: FeedCtrl
    });
  };

  /**
   * controls application access from the client side. Has
   * states for login and signup.  
   * @param {angular} $scope 
   */
  var FeedCtrl = function ($scope) {
    $scope.foo = 'bar';
  };

  // Entry point for module
  angular

    .module('app', [])

    .config(FeedStateConfig)

    .controller('FeedCtrl', FeedCtrl);

})(angular, _);
