/* 
* @Author: nimi
* @Date:   2015-05-05 14:26:59
* @Last Modified by:   vokoshyv
* @Last Modified time: 2015-05-05 15:24:33
*/

'use strict';

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Exercises', {
    exerciseName: DataTypes.STRING,
    quantity: DataTypes.STRING,
    result: DataTypes.STRING
  })
}