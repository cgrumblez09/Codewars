// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

//     If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//     If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// PREP
// We have an input of 10, which is assumed to be positive and an integer
// We need to return a string depending on whether the parameter is greater than or equal to 10
// If greater, return a positive message. Else an encouraging message

// Simple conditional needed. An if statement or ternary will solve the kata

function hoopCount (n) {
    return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
  }

//   function hoopCount (n) {
//     const HOPS_LIMIT = 10
//     return n >= HOPS_LIMIT
//       ? 'Great, now move on to tricks'
//       : 'Keep at it until you get it';
//  }

// const hoopCount = n => n < 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks';