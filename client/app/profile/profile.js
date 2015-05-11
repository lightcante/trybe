/*
* @Author: VINCE
* @Date:   2015-05-08 11:11:52
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-11 10:31:30
*/

'use strict';
(function (angular, _) {

  /**
   * Sets viewstate for profile page
   * @param {[angular]} $stateProvider
   */
  var ProfileConfig = function($stateProvider) {

    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'profile/profile.tpl.html',
        controller: ProfileCtrl
      });
  };

  /**
   * Controls profile for client side.
   * @param {angular} $scope
   */
  var ProfileCtrl = function ($scope, $window, $state, AuthFactory, FeedFactory, ProfileFactory) {
    $scope.data = {};
    $scope.data.workouts = [
          {
            'username':'Tom',
            'trybe':'CFSF',
            'type':'lift',
            'title':'05042015',
            'description':'Build up to 5 rep max of ',
            'exercises':
            [
              {
                'exerciseName':'bench press',
                'quantity':[5,5],
                'result':185
              },
              {
                'exerciseName':'squat',
                'quantity':[5,5],
                'result':200
              }
            ],
            'finalResult':null
          },
          {
            'username':'Tom',
            'trybe':'CFSF',
            'type':'metcon',
            'title':'05042015',
            'description':'5 rounds, each on a 3-minute clock of',
            'exercises':
              [
                {
                  'exerciseName':'20 GHD sit-ups',
                  'quantity':null,
                  'result':null
                },
                {
                  'exerciseName':'20 hip extensions',
                  'quantity':null,
                  'result':null
                }
              ],
              'finalResult':{'type':'reps','value':45}
          },
          {
            'username':'Tom',
            'trybe':'CFSF',
            'type':'benchmark',
            'title':'fran',
            'description':'perform 21-15-9 reps of',
            'exercises':
              [
                {
                  'exerciseName':'95 lb thrusters',
                  'quantity':null,
                  'result':null
                },
                {
                  'exerciseName':'pull-ups',
                  'quantity':null,
                  'result':null
                }
              ],
            'finalResult':{'type':'time','value':338}
          },
          {
            'username':'Tom',
            'trybe':'CFSF',
            'type':'lift',
            'title':'05102015',
            'description':'Build up to 5 rep max of ',
            'exercises':
            [
              {
                'exerciseName':'bench press',
                'quantity':[5,5],
                'result':195
              },
              {
                'exerciseName':'squat',
                'quantity':[5,5],
                'result':225
              }
            ],
            'finalResult':null
          },
        ];

    $scope.getUserData = function() {
      FeedFactory.getMyWorkouts()
        .then(function(data){
          $scope.data.workouts = data.workouts;
          console.log('profile received:', $scope.data.workouts);
        })
        .catch(function(error) {
          console.error(error);
        });
    };

    //get most recent exercise done, by:
    $scope.getWorkoutProgress = function() {
      //sort workouts by creation date
      //find most recent lift or benchmark workout
        //if lift, find all results of lift
        $scope.data.results = ProfileFactory.findSameLifts($scope.data.workouts, 'bench press', 5);
        //if metcon, find all results of metcon
          //store the results of it
          //graph results across time
    };

    // $scope.getUserData();
    $scope.getWorkoutProgress();

  };

  // Entry point for module
  angular

    .module('trybe-app.profile', ['trybe-app.common'])

    .config(ProfileConfig)

    .controller('ProfileCtrl', ProfileCtrl);

})(angular, _);
