/* 
* @Author: justinwebb
* @Date:   2015-05-04 15:12:58
* @Last Modified by:   justinwebb
* @Last Modified time: 2015-05-04 15:14:26
*/
'use strict';
var config = require('./server-config'),
    express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    open = require('open');

// Configure server
app.use(express.static(config.static_site_root));

// Run server
server.listen(config.port, function () {
    console.log('Express server listening on port %d', config.port);
    open('http://localhost:' + config.port, function (err) {
        if (err) {
            throw err;
        }
        else {
            console.log('App server browser tab is open...');
        }
    });
});
