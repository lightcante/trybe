/* 
* @Author: nimi
* @Date:   2015-05-04 16:41:47
* @Last Modified by:   nimi
* @Last Modified time: 2015-05-05 14:08:02
*/


'use strict';

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Workouts', {
    title: sequelize.STRING,
    type: sequelize.STRING,
    description: sequelize.STRING,
    finalResult: sequelize.STRING
  })
}