
////////////////////////////////////////////////////////////
// These are the different workouts that you can store 
// receive. The format will always be as follows 
////////////////////////////////////////////////////////////

// Workout : Lift
                                                                                
{
  username: 'Tom',
  trybe: 'CFSF',
  type: 'lift',
  title: '05042015',
  description: 'build up to 8- rep max of ',
  exercises: [
    {
      exerciseName: 'bench press',
      quantity: [3, 8], //[sets, reps]
      result: 185
    },
    {
      exerciseName: 'squat',
      quantity: [2,8],
      result: 200
    }
  ],
  finalResult: null
};


//Workout : Metcon

{
  username: 'Mia',
  trybe: 'CFSF',
  type: 'metcon',
  title: '05042015',
  description: '5 rounds, each on a 3-minute clock of', 
  exercises: [
    {
      exerciseName: '20 GHD sit-ups',
      quantity: null,
      result: null
    },
    {
      exerciseName: '20 hip extensions',
      quantity: null,
      result: null
    }
  ],
  finalResult: {type: 'reps', value: 45}
};

// Workout: Benchmark
{
  username: 'Greg',
  trybe: 'CFSF',
  type: 'benchmark',
  title: 'fran',
  description: 'perform 21-15-9 reps of', 
  exercises: [
    {
      exerciseName: '95 lb thrusters',
      quantity: null,
      result: null
    },
    {
      exerciseName: 'pull-ups',
      quantity: null, 
      result: null
    },
  ],
  finalResult: {type: 'time', value: 338}
};


////////////////////////////////////////////////////////////
// These are the user objects that will be sent by the 
// client. In the event of a signin/signup, our database 
// will send back the workouts in the object.
////////////////////////////////////////////////////////////


//User Object
  //Sent by client:
{
  username: 'Tom',
  password: 'tomisthebest'
}
  //Sent back from server:
{
  token: '515684ff65a464',
  // this will be all the workouts stored in our database. 
  // The workout objects follow the format listed above
  workouts: [ workoutObj, workoutObj, workoutObj ]
}


// Authentication Object
  // Sent by client:
{
  'x-access-token' : '515684ff65a464'
}
  // Sent back from server
statusCode: 200 || 401
