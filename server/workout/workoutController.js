/* 
* @Author: nimi
* @Date:   2015-05-04 16:41:47
* @Last Modified by:   vokoshyv
* @Last Modified time: 2015-05-06 15:33:52
*/
'use strict';

var Workout = require('../models').workout;
var Trybe = require('../models').trybe;
var Exercise = require('../models').exercise;
var User = require('../models').user;

module.exports = {

  saveWorkout: function(req, res, next){
    // Acquire workout information from the req.body;
    // Write the workout information to the sql tables

    console.log(req.body);

    // Trybe.find({where: {name: req.body.trybe}}).then(function(trybe){
    //   console.log("TRYBE INFO FROM TABLE: ", trybe);
    // })
    
    User.find({where: {name: req.body.username}}).then(function(user){
      console.log("USER INFO FROM TABLE", user);
    })
    // var userID = 

    Workout.build({
      // userId: 
      type: req.body.type,
      title: req.body.title,
      description: req.body.description, 
      finalResult: req.body.finalResult
      // TrybeId: 
    })


    
    // We then run getAllWorkouts to acquire workouts
    // from workout table
    // module.exports.getAllWorkouts(req, res, next);
  },

  //take in 4th parameter of token to be added to res.body
  getAllWorkouts: function(req, res, next, token, userID){
    // var body = {
    //   token : token, 
    //   workout: [1, 2, 3], 
    //   userID: userID
    // }

    res.send({
      workouts: [ 
      {
        username: 'Tom',
        trybe: 'CFSF',
        type: 'lift',
        title: '05042015',
        description: 'build up to 8- rep max of ',
        exercises: [
          {
            exerciseName: 'bench press',
            quantity: [3, 8], //[sets, reps]
            result: 185
          },
          {
            exerciseName: 'squat',
            quantity: [2,8],
            result: 200
          }
        ],
        finalResult: null
      }, 
      {
        username: 'Mia',
        trybe: 'CFSF',
        type: 'metcon',
        title: '05042015',
        description: '5 rounds, each on a 3-minute clock of', 
        exercises: [
          {
            exerciseName: '20 GHD sit-ups',
            quantity: [null],
            result: null
          },
          {
            exerciseName: 'hip extensions',
            quantity: [2,5],
            result: null
          }
        ],
        finalResult: {type: 'reps', value: 45}
      }, 
      {
        username: 'Greg',
        trybe: 'CFSF',
        type: 'benchmark',
        title: 'fran',
        description: 'perform 21-15-9 reps of', 
        exercises: [
          {
            exerciseName: '95 lb thrusters',
            quantity: null,
            result: null
          },
          {
            exerciseName: 'pull-ups',
            quantity: null, 
            result: null
          },
        ],
        finalResult: {type: 'time', value: 338}
      } 
      ]
    });
  }

};