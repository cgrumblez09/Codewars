// Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

//function none(arr, fun){
  // ...
// }

// Use some method

function none(arr, fun){
    return !arr.some(fun);
  }

//   const none = (arr, fun) => !arr.some(fun);

// function none(arr, fun){
//     for (var i = 0; i < arr.length; i++) {
//       if (fun(arr[i]) == true) {
//         return false;
//       }
//     }
    
//     return true;
//   }

// function none(arr, fun){
//     return !arr.some(fun)
//   }//z.

// var none = (a, fn) => !a.some(fn);
