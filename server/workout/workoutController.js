/* 
* @Author: nimi
* @Date:   2015-05-04 16:41:47
* @Last Modified by:   vokoshyv
* @Last Modified time: 2015-05-06 11:27:19
*/
'use strict';

module.exports = {

  saveWorkout: function(req, res, next){
    // res.send({"IT WORKS" : "IT WORKS"});
    module.exports.getAllWorkouts(req, res, next);
  },

  getAllWorkouts: function(req, res, next){
    res.send({
      workouts: [ 
      {
        username: "Tom",
        trybe: "CFSF",
        type: "lift",
        title: "05042015",
        description: "build up to 8- rep max of ",
        exercises: [
          {
            exerciseName: "bench press",
            quantity: [3, 8], //[sets, reps]
            result: 185
          },
          {
            exerciseName: "squat",
            quantity: [2,8],
            result: 200
          }
        ],
        finalResult: null
      }, 
      {
        username: "Mia",
        trybe: "CFSF",
        type: "metcon",
        title: "05042015",
        description: "5 rounds, each on a 3-minute clock of", 
        exercises: [
          {
            exerciseName: "20 GHD sit-ups",
            quantity: [null],
            result: null
          },
          {
            exerciseName: "hip extensions",
            quantity: [2,5],
            result: null
          }
        ],
        finalResult: {type: 'reps', value: 45}
      }, 
      {
        username: "Greg",
        trybe: "CFSF",
        type: "benchmark",
        title: "fran",
        description: "perform 21-15-9 reps of", 
        exercises: [
          {
            exerciseName: "95 lb thrusters",
            quantity: null,
            result: null
          },
          {
            exerciseName: "pull-ups",
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