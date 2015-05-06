/* 
* @Author: vokoshyv
* @Date:   2015-05-05 09:56:42
* @Last Modified by:   nimi
* @Last Modified time: 2015-05-05 17:26:05
*/

'use strict';

var jwt = require('jwt-simple');
var passport= require('passport');
var workoutController = require('../workout/workoutController.js');

module.exports = {

  signin : function(req, res, next){
    passport.authenticate('local-signin' , function(err, user, info){
      if(err){
        return next(err);
      } else if(!user){
        return res.send(info);
      } else {
        var token = {token: jwt.encode(user, 'lighthoney')};
        res.write(token);
        workoutController.getAllWorkouts(req, res, next);
      }
    });
  },

  signup: function(req, res, next){
    console.log('singing up');
  },

  checkAuth: function(req, res, next){
    console.log('auth')
  }
};
