/* 
* @Author: vokoshyv
* @Date:   2015-05-05 09:56:42
* @Last Modified by:   nimi
* @Last Modified time: 2015-05-06 12:18:40
*/

'use strict';

var jwt = require('jwt-simple');
var passport= require('passport');
var workoutController = require('../workout/workoutController.js');

module.exports = {

  signin : function(req, res, next){
    passport.authenticate('local-signin' , function(err, user, info){
      if(err){ // if there was an error
        return next(err);
      } else if(!user){ // if the user was not found in the database
        return res.send(info); // will return the info back to the client side
      } else {
        var token =  jwt.encode(user, 'lighthoney');
        workoutController.getAllWorkouts(req, res, next, token);
      }
    })(req, res, next);
  },

  signup: function(req, res, next){
    passport.authenticate('local-signup', function(err, user, info){
      if(err){
        return next(err);
      } else if (!user){
        return res.send(info)
      } else {
        module.exports.signin(req,res,next) // redirect to sign in function
      }
    })(req, res, next);
  },

  checkAuth: function(req, res, next){
    console.log('auth')
    res.send(200);
  }
};

