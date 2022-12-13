// Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

// Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

// To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.

// Examples:
// countSquares(2) --> 26
// countSquares(4) --> 98

// var countSquares = function(cuts){
  
// }

// We have a number, an integer, as a paramete
// We need to return how many cubes there are and how many sides to it there are
// If no cuts, return 1
// Six sided dice times number of cuts times number of cuts and add 2

const countSquares = cuts => cuts ? (6 * cuts * cuts) + 2 : 1;

// var countSquares = function(cuts){
//     if (!cuts) {
//       return 1;
//     }
  
//     const totalCubes = Math.pow(cuts + 1, 3);
//     const innerCubes = Math.pow(cuts - 1, 3);
    
//     return totalCubes - innerCubes;
//   }

//   const countSquares = cuts =>
//   (6 * cuts ** 2 + 2) ** !!cuts;