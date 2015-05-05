/* 
* @Author: nimi
* @Date:   2015-05-04 16:41:47
* @Last Modified by:   vokoshyv
* @Last Modified time: 2015-05-05 15:24:17
*/


'use strict';

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Workouts', {
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    finalResult: DataTypes.STRING
  });
};