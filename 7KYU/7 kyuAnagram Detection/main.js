// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// We have two strings that we need to compare and make an anagram
// We need to split the strings and map them to a new array to lower case to make the letter equal
// Then sort the array and rejoin it
// We can then compare each string and return true or false

var isAnagram = function(test, original) {
    let one = test.split('').map(x => x.toLowerCase()).sort().join('');
    let two = original.split('').map(x => x.toLowerCase()).sort().join('');
    console.log(one,two)
    if(one == two){
      return true
    }
    else{
      return false
    }
  };

//   var isAnagram = function(test, original) {
//     var t = test.toLowerCase().split('').sort().join('');
//     var o = original.toLowerCase().split('').sort().join('');
//     return (t==o)?true:false;
//   };

//   String.prototype.sortLetters = function() {
//     return this.toLowerCase().split('').sort().join('');
//   }
  
//   var isAnagram = function(test, original) {
//     return test.sortLetters() == original.sortLetters();
//   };

//   function isAnagram (test, original) {
//     return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
//   }

//   var isAnagram = function(test, original) {
//     if(test.length !== original.length) { return false }
//     return [...test.toLowerCase()].sort().join("") === [...original.toLowerCase()].sort().join("")
// };