//Routes


//These are the methods for the authentication factory

  //Signin
      return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
      })
        .then (function(response){
          // will have two properties : token and 
          // workouts (array of workout objects)
          return response.data; 
        });

  //Signup
      return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
      })
        .then (function(response){
          // will have two properties : token and 
          // workouts (array of workout objects)
          return response.data; 
        });

  //Checking if signed in

    return $http({
      method: 'GET',
      url: '/api/users/signedin',
      data: tokenObject
      })
        .then (function(response){
          // response will have a status that will be 
          // 200 (ok) or 401 (bad)
          return response; 
        });

  //Logging out
    function signout(){
      $window.localStorage.removeItem('com.trybe');
      $location.path('/signin');
    }




//These are the methods in the factory for posting workouts
//and for getting individual or all workouts
  
  //Getting all workouts stored
  return $http({
    method: 'GET',
    url: '/api/workouts/all',
    // data is optional
    data: {'ORDERING_CRITERIA_KEY': 'ORDERING_CRITERIA_VALUE'}
  })
    .then(function(response){
      return response.data
    })

  //Getting solo workouts stored
  return $http({
    method: 'GET',
    url: '/api/workouts/individual',
    // data is optional
    data: {'ORDERING_CRITERIA_KEY': 'ORDERING_CRITERIA_VALUE'}
  })
    .then(function(response){
      return response.data
    })

  //Posting a workout
    return $http({
      method: 'POST',
      url: '/api/workouts',
      data: workoutObject
    })
      .then(function(response){
        console.log('Workout added', response)
        // workouts (array of workout objects) 
        // will be all workouts
        return response.data; 
      })
