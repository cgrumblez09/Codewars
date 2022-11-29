// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// function squareDigits(num){
    
//   }

// We have a whole number
// We need to return a new number, squaring each individual digit in the number and concat that
// We start with making the number a string and split it into an array
// We can then map out a new array, making each string into and number and squaring it
// We then concat the result into a whole string
// Return the string into a number


  
function squareDigits(num){
    let str = num.toString().split('').map(num => Math.pow(Number(num) , 2).toString()).join('');
    return Number(str)
  }

//   function squareDigits(num){
//     return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
//   }

//   function squareDigits(num){
//     return +num.toString().split('').map(i => i*i).join('');
//   }

//   function squareDigits(num){
//     var array = num.toString().split('').map( function(int) {
//       var i = parseInt(int);
//       return i * i;
//     });
    
//     return parseInt(array.join(""));
//   }

//   function squareDigits(num){
//     var string = num.toString();
//     var results = [];
//     for (var i = 0; i < string.length; i++){
//         results[i] = string[i] * string[i];
//     }
//     return Number(results.join(''));
// };