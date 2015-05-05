/* 
* @Author: nimi
* @Date:   2015-05-05 13:31:44
* @Last Modified by:   nimi
* @Last Modified time: 2015-05-05 14:08:37
*/

'use strict';

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Trybes', {
    name: sequelize.STRING
  })
}