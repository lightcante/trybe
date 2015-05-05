/* 
* @Author: nimi
* @Date:   2015-05-05 14:26:59
* @Last Modified by:   nimi
* @Last Modified time: 2015-05-05 14:27:52
*/

'use strict';

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Exercises', {
    exerciseName: sequelize.STRING,
    quantity: sequelize.STRING,
    result: sequelize.STRING
  })
}