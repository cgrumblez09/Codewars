// Return the type of the sum of the two arguments

// PREP
// typeof used to return a string of the type of the operands value
// EX) "number" "string" "boolean"
// If one of the two values is a string we need to return 'string'
// else we need to return 'number'

function typeOfSum(a, b) {
    if(typeof a == 'string' || typeof b == 'string'){
      return 'string'
    }
    else{
      return 'number'
    }
  }

//   const typeOfSum = (a, b) => typeof(a + b);

//   function typeOfSum(a, b) {
//     return typeof(a + b);
//   }

//   function typeOfSum(a, b) {
//     if (typeof a === 'string' || a instanceof String){return 'string'}
//     if (typeof b === 'string' || b instanceof String){return 'string'}
//     return 'number'
//   }