/* 
* @Author: nimi
* @Date:   2015-05-05 13:31:44
* @Last Modified by:   vokoshyv
* @Last Modified time: 2015-05-05 15:25:05
*/

'use strict';

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Trybes', {
    name: DataTypes.STRING
  })
}