#!/bin/sh
# @Author: nimi
# @Date:   2015-05-11 13:02:29
# @Last Modified by:   nimi
# @Last Modified time: 2015-05-11 13:06:06

#run grunt- default will build the app
./node_modules/grunt-cli/bin/grunt

#install client side dependencies
./node_modules/bower/bin/bower install
