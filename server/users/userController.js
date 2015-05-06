/* 
* @Author: vokoshyv
* @Date:   2015-05-05 09:56:42
* @Last Modified by:   nimi
* @Last Modified time: 2015-05-08 22:05:22
*/

'use strict';

var jwt = require('jwt-simple');
var passport= require('passport');
var workoutController = require('../workout/workoutController.js');
var User = require('../models').user;

module.exports = {

  signin : function(req, res, next){
    passport.authenticate('local-signin' , function(err, user, info){
      if(err){ // if there was an error
        return next(err);
      } else if(!user){ // if the user was not found in the database
        next (new Error(info)); // will return the info back to the client side
      } else {
        var token =  jwt.encode(user.username, 'lighthoney');
        console.log('token', token);
        // var userID = user.get('id');
        var username = user.get('username');
        res.send({
          username: username, 
          token: token
        });
        // workoutController.getAllWorkouts(req, res, next, token, userID);
      }
    })(req, res, next);
  },

  signup: function(req, res, next){
    passport.authenticate('local-signup', function(err, user, info){
      if(err){
        return next(err);
      } else if (!user){
        next( new Error(info))
      } else {
        module.exports.signin(req,res,next) // redirect to sign in function
      }
    })(req, res, next);
  },

  checkAuth: function(req, res, next){
    var token = req.headers['x-access-token']; //get the token from the request header
    var username = jwt.decode(token, 'lighthoney'); // decode the token with our secret to find the user object
    User.find( {where: {username: username}} ).then(function(user){ // search the database for a user that matches
      if(user){ // if the user is found, send back a 200 status code
        res.send(200);
      } else { // if the user isn't found, send back a 401
        res.send(401)
      }
    })
  }
};

