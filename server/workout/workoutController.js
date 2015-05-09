/* 
* @Author: nimi
* @Date:   2015-05-04 16:41:47
* @Last Modified by:   vokoshyv
* @Last Modified time: 2015-05-06 17:50:38
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

    var userID;
    var trybeID;
    var workoutID;

    //Acquire userID from User table
    User.find({where: {username: req.body.username}}).then(function(user){
      userID = user.get('id');

      //Acquire trybeID from Trybe table
      Trybe.find({where: {name: req.body.trybe}}).then(function(trybe){
        trybeID = trybe.get('id');
        
        //Insert data into Workout table
        Workout.build({
          UserId: userID,
          type: req.body.type,
          title: req.body.title,
          description: req.body.description, 
          finalResult: req.body.finalResult,
          TrybeId: trybeID
        })
        .save()
        .then(function(workout){

          //Acquire the workoutID from Workout table
          workoutID = workout.get('id');

          //Insert all exercises into Exercises table
          req.body.exercises.forEach(function(exercise){
            Exercise.build({
              exerciseName: exercise.exerciseName,
              quantity: JSON.stringify(exercise.quantity), 
              result: exercise.result, 
              WorkoutId: workoutID
            })
            .save();
          });

          //Run getAllWorkouts to return the response with 
          //an array of workouts 
          module.exports.getAllWorkouts(req, res, next);
        });
      });
    });
    



    
    // We then run getAllWorkouts to acquire workouts
    // from workout table
  },


  getAllWorkouts: function(req, res, next){
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