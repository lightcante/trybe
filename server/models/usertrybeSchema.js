/* 
* @Author: vokoshyv
* @Date:   2015-05-05 15:32:22
* @Last Modified by:   vokoshyv
* @Last Modified time: 2015-05-05 15:34:28
*/

'use strict';

module.exports = function(sequelize, DataTypes){
  return sequelize.define("UsersTrybes", {
    started: DataTypes.BOOLEAN
  })
}