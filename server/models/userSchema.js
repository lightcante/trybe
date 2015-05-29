/*
* @Author: nimi
* @Date:   2015-05-05 13:30:36
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-26 15:21:13
*/

'use strict';

var bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes){
  return sequelize.define('Users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    instanceMethods : {
      comparePassword : function(inputPassword, callback) {
        var userPassword = this.get('password');
        bcrypt.compare(inputPassword, userPassword, function(err, isMatch){
          if (err){
            console.log(err)
          } else {
            callback(isMatch)
          }
        })
      }
    },

    hooks : {
      beforeCreate: function(user, options, fn) {
      bcrypt.hash(user.password, null, null, function(err, hashPassword){
        user.password = hashPassword
        fn(null, user)
      })
    }
    }
  });
}

