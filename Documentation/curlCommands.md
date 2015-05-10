#Curl Commands

##These can be used to check that your backend is working as expected

###Signing up 

This will store the user into your database. You should expect to receive an object with the user token and and array of all workout objects

> curl -i -X POST -H 'Content-Type: application/json' -d '{"username": "ENTER_USERNAME", "password": "ENTER_PASSWORD"}' http://localhost:3444/api/users/signup

###Signing in

This will check the database for the user and upon success, return an object with the user token and an array of all workout objects. 

> curl -i -X POST -H 'Content-Type: application/json' -d '{"username": "ENTER_USERNAME", "password": "ENTER_PASSWORD"}' http://localhost:3444/api/users/signin

###Check Authentication

This will check that your authentication is working. It will decode the token that is in the header and see if the user matches a user in the database

If you need to grab a token, we recommend throwing in a console.log at the line after you create the token with jwt

> curl --header "X-Access-Token: ENTER_TOKEN" http://localhost:3444/api/users/signedin

###Enter Workouts

This will store the workout into the database. You should expect to receive an object with an array of all workout objects stored into the database. You can change the values in the object, but make sure that it follows the data object format described in the docs and is a json object

>curl -i -X POST -H "Content-Type: application/json" -d '{"username":"Tom","trybe":"CFSF","type":"lift","title":"05042015","description":"build up to 8- rep max of ","exercises":[{"exerciseName":"bench press","quantity":[3,8],"result":185},{"exerciseName":"squat","quantity":[2,8],"result":200}],"finalResult":null}' http://localhost:3444/api/workouts

###Get All Workouts
curl --header "X-Access-UserID:1" http://localhost:3444/api/workouts/all

###Get Individual Workouts
curl --header "X-Access-UserID:1" http://localhost:3444/api/workouts/individual




