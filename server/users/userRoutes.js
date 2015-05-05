/* 
* @Author: vokoshyv
* @Date:   2015-05-05 09:56:42
* @Last Modified by:   vokoshyv
* @Last Modified time: 2015-05-05 11:26:05
*/


//userRoutes.js

var userController = require('./userController.js');

module.exports = function(app){
  // this app was injected from the middleware line 33;

  app.post('/signin', userController.signin);
  app.post('/signup', userController.signup);
  app.get('/signedin', userController.checkAuth);
}