// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// Example:

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'
// Notes
// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.
// If you like this kata, check out the next one: Last Survivors Ep.2

// function lastSurvivor(letters, coords) {

// }

// We have function with two parameter, a string and an array with numbers
// We need to elimninate the letter in the string according to the value in the index in the array, starting with the zero index
// We then go to the next index in the array and use that number to remove the next letter in the string
// We take the string and split it in a variable, making it an array
// We then loop through that array, using the coords as the length because we need the loop to stop at the last index of the array, not the string
// We can then splice the array, using the index of coords and eliminate 1 
// The string needs to be joined and returned

function lastSurvivor(letters, coords) {
    //   console.log(letters, coords)
      let str = letters.split('')
      for(let i = 0; i < coords.length; i++){
        str.splice(coords[i] , 1)
      }
      console.log(str.join(''))  
      return str.join('')
    }
// function lastSurvivor(string, indices) {
//   const arr = [...string];
//   for (const i of indices) arr.splice(i, 1)
//     return arr[0];
//  }

// function lastSurvivor(letters,coords) {
//     return coords.reduce( (letters,coord) => 
//     letters.slice(0,coord) + letters.slice(coord+1), letters ); 
//     }

//     function lastSurvivor(letters, coords) {
//         let lsplit = letters.split("");
//           for(let i = 0; i < lsplit.length; i++) {
//               for(let j = 0; j < coords.length; j++) {
//                   lsplit.splice(coords[j], 1);
//               }
//           }
//         let leftOver = lsplit[0];
//         return leftOver;
//       }
