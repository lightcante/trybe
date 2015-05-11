#!/bin/sh
# @Author: nimi
# @Date:   2015-05-11 13:02:29
# @Last Modified by:   nimi
# @Last Modified time: 2015-05-11 14:45:22


#install client side dependencies
./node_modules/bower/bin/bower install

#run grunt- default will build the app
./node_modules/grunt-cli/bin/grunt
