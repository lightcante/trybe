/* 
* @Author: nimi
* @Date:   2015-05-05 16:15:10
* @Last Modified by:   nimi
* @Last Modified time: 2015-05-05 17:23:15
*/

'use strict';

var LocalStrategy = require ('passport-local').Strategy;
var User = require('../models').user;
var passport = require('passport');

module.exports = function(passport){

   passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
  };

passport.use('local-signin', new LocalStrategy(
  function(username, password, done){
    User.find( {where: {username: username} }).on('success', function(user){
      // if a user exists with that username
      if (user) {
        // compare the password with the password that matches up
        if(user.comparePassword(password)){
          // if the password matches up, return the user to the next function
          return done(null, user);
        } else {
          // if the user does not match up, send back a null for the user and a message to send up to the client
          return done(null, false, 'The password does not match');
        }
      } else { //user does not exist with that username
        return done(null, false, 'User does not exist');
      }
    });
  }));