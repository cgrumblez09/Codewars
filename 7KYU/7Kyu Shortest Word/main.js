// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// PREP
// Need to split the string into and array and sort the array by length and return the shortest length

function findShort(s){
    return s.split(' ').sort((a , b) => a.length - b.length)[0].length
  }

//   function findShort(s){
//     return Math.min.apply(null, s.split(' ').map(w => w.length));
//   }

// function findShort(s){
//     return Math.min(...s.split(" ").map (s => s.length));
// }
// function findShort(s){
//     var arr = s.split(' ');
//     var smallest = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//       if(arr[i].length < smallest.length){
//         smallest = arr[i];
//       }
//     }
//     return smallest.length;
//   }