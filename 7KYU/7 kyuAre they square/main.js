// Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

// Your function should return true if all elements in the array are square numbers and false if not.

// An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

// Examples:

// isSquare([1, 4, 9, 16]) --> true

// isSquare([3, 4, 7, 9]) --> false

// isSquare([]) --> undefined

// is_square([1, 4, 9, 16]) --> True

// is_square([3, 4, 7, 9]) --> False

// is_square([]) --> None

//  PREP
//  We are given an array, assumed to be whole integers and positive
//  Each element in the array needs to be check if it has a square root
//  If every element has a square root, return true
//  Else false
//  Empty arrays return undefined
//  We can start with checking if the arr is empty or not with the .length. Assigned undefined to an empty array
//  If the array is not empty we can check every()
//  every() uses a function to check if the function is true in every index of the array. If all are true, every() returns true
//  The function should check if the square root % 1 == 0. 

var isSquare = function(arr){
    return (arr.length) ? arr.every(x=>Math.sqrt(x)%1==0) : undefined;
  }

//   var isSquare = function(arr){
//     if (!arr.length) return undefined;
//     return arr.every(x => Number.isInteger(Math.sqrt(x)));
//   }

//   var isSquare = function(arr){
//     for (var i = 0; i < arr.length; i++) {
//       if(!Number.isInteger(Math.sqrt(arr[i]))) {
//         return false;
//       }
//     }
  
//     return arr.length ? true : undefined;
//   }

