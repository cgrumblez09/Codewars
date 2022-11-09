// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

// [01]
// 02 [03]
// 04 05 [06]
// 07 08 09 [10]
// 11 12 13 14 [15]
// 16 17 18 19 20 [21]

// e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

// Triangular Numbers cannot be negative so return 0 if a negative number is given.

// We have to figure out a formula to sum of a triangles values at the nth number, or the end number of each row in a triangle
// The parameter (n) is the amount of rows in the triangle
// It will take in a whole number and if the number is less that 0 then we return 0
// We will return the sum, a total added amount
// We can do a loop and add the amounts in the loop to a variable that starts at 0
// Each row of the triangle needs to start at the amount of the previous row + 1. with the first row starting at 1

function sumTriangularNumbers(n) {
    let sum = 0
    for(let i = 1; i <= n; i++){
      sum += (i * (i + 1))/2;
    }
    return sum
  }

//   function sumTriangularNumbers(n) {
//     return n < 0 ? 0 : n * (n + 1) * (n + 2) / 6;
//   }

// function sumTriangularNumbers(n) {
//     if  (n < 0){
//     return 0;
//     }
//     else  {
//       return n*(n+1)/2 + sumTriangularNumbers(n-1);
//     }
//   }

// function sumTriangularNumbers(n) {
//     let sum = 0
//     for (let i=0, j=1; i<n; i++, j += i+1) {
//       sum += j
//     }
//     return sum
//   }

