/* 
* @Author: nimi
* @Date:   2015-05-05 13:30:36
* @Last Modified by:   nimi
* @Last Modified time: 2015-05-05 14:04:38
*/

'use strict';

module.exports = function(sequelize, DataTypes){
  return sequelize.define('Users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING
  });
};

