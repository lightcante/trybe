/* 
* @Author: nimi
* @Date:   2015-05-05 16:15:10
* @Last Modified by:   vokoshyv
* @Last Modified time: 2015-05-09 00:21:09
*/

'use strict';

var LocalStrategy = require ('passport-local').Strategy;
var User = require('../models').user;
var Trybe = require('../models').trybe;
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

//this function will set up the strategy for when a user signs in. It will search the database for the username and match
//the password
passport.use('local-signin', new LocalStrategy(
  function(username, password, done){
    User.find( {where: {username: username} }).then(function(user){
      // if a user exists with that username
      if (user) {
        // compare the password with the password that matches up
        user.comparePassword(password, function(isMatch){
          if (isMatch){
          // if the password matches up, return the user to the next function
            return done(null, user);
          } else {
          // if the user does not match up, send back a null for the user and a message to send up to the client
          return done(null, false, 'The password does not match');
          }
        })
      } else { //user does not exist with that username
        return done(null, false, 'User does not exist');
      }
    });
  }));

// this function will set up the strategy for user sign up. It will search the database for that username to make sure that
// there isn't a user with that username and then if ok, will create a table entry in the database.
passport.use('local-signup', new LocalStrategy(
  function(username, password, done){
    User.find( {where: {username: username} }).then(function(user){
      if(user){ //if that username already exists
        return done(null, false, 'That username already exists') //send back a falsy value for user and the message
      } else {
        User.build({username: username, password: password}) // builds the new user to be saved in the database
          // .setTrybes([trybe], {name: "CFSF"})
          .save() // saves the user to the database
          .then(function(user){ // on success, send back user data
            Trybe.find({ where: {name: 'CFSF'} }).then(function(trybe){
              user.setTrybes(trybe).then(function() {
                console.log('relationship set!')
              })
            })
            return done(null, user)
          })
          .catch(function(err){ // error handling
            return done(err);
          })
      }
    })
  }))

};
