// The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

// [This is writen in pseudocode]
// if(number is even) number = number / 2
// if(number is odd) number = 3*number + 1

// #Task

// Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

// #Examples

// hotpo(1) returns 0
// (1 is already 1)

// hotpo(5) returns 5
// 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(6) returns 8
// 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(23) returns 15
// 23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 8

// var hotpo = function(n){
//     if(n == 0) return 0; //Optional Handler to n = 0
    
// }

// We have a number and need to do one of two formulas
// The formulas will run until we have the formula equal 1
// We can start with a condition where if n = 1 we return 0
// Otherwise we can have a while loop
// Set up a variable with a value of 0 to mutate
// While n > 1 n = either n/2 or 3 * n + 1
// ++ the variable each time the loops runs
// Once n is no longer greater than 1 the loop will stop
// Return the variable count

let hotpo = n => {
    if (n == 0) return 0;
    let c = 0;
    while (n > 1) {
     n = (n % 2 ? 3 * n + 1 : n / 2);
     c++;
    }
    return c;
  }

//   var hotpo = function(n){
//     if(n == 0) return 0;
//     for (let i = 0; i < 100; i++){
//         if (n == 1){
//           return i;
//         }else if ( n % 2 == 0){
//           n /= 2;
//         }else{
//           n = n * 3 + 1
//         }
//     }  
// }

// var hotpo = function(n, acc = 0) {
//     if (n <= 1) {
//       return acc;
//     } else {
//       return hotpo(n%2==0 ? n/2 : 3*n+1, acc+1);
//     }
//   }

//   var hotpo = function(n){
//     var rs=0;
//     while (n>1){
//       rs++;
//       n=n%2?n*3+1:n/2;
//     }
//     return rs;
// }