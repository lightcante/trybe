/* 
* @Author: nimi
* @Date:   2015-05-04 16:41:47
* @Last Modified by:   nimi
* @Last Modified time: 2015-05-08 12:58:03
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
    var workouts = [];
    var userID = req.headers['x-access-userid']
    User.find ({where: {id: userID}}).then(function(user){ // find the user
      user.getTrybes().then(function(trybes){ //will return an array of trybe objects
        trybes.forEach(function(trybe){
          trybe.getWorkouts().then(function(workouts){ // will return an array of workouts
            workouts.forEach(function(workout){
              Exercise.findAll({where: {workoutID: workout.get('id')}}).then(function(exercises){ // finds all exercises for each workout
                var workoutObj = {
                  username: user.get('username'),
                  trybe: trybe.get('name'),
                  type: workout.get('type'),
                  title: workout.get('title'),
                  description: workout.get('description'),
                  exercises: exercises,
                  finalResult: workout.get('finalResult')
                };
                workouts.push(workoutObj);
              });
            })
          })
        })
        res.send(workouts)
      })
    });
  }

};
