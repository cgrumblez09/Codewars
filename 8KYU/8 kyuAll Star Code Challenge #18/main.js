// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

// Prep
// We need a function that starts with two strings 'str' and 'letter'
// The function will take any instance of 'letter' and add/count the number of occurences in the string
// If no occurences are found return 0. This could be a conditional statement
// Nothing other than a string is expected in the kata
// A loop can go through the string and for every instance of 'letter' can be added to a counter starting at 0

function strCount(str, letter){ 
    let count = 0;
    const arr = str.split('');
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === letter){
        count++
      }
    }
    console.log(count)
    return count
  }

//   function strCount(str, letter){  
//     return str.split(letter).length-1
//   }

//   function strCount(str, letter){  
//     return str.split('').filter(c => c == letter).length;
// }
//   function strCount(str, letter) {  
//     return str.length - str.replace(new RegExp(letter, "gi"), '').length;
//   }