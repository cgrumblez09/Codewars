// String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

// We take in a string of letters or numbers or special characters
// We need to change the letters from lower case to upper case and vice versa. No other characters will change
// The function should not change the string
// This is a prototype so use 'this' when needed

// We need to split the string and either loop throughh and push/add to an array or empty string
// We can use map as well
// We check if each letter in is either upper or lower and make it the other
// We then need to join the the split string

String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}

// String.prototype.toAlternatingCase = function () {
//     new_str = "";
//     for(var i = 0; i < this.length; i++) {
//       if(this[i] === this[i].toUpperCase()) {
//         new_str += this[i].toLowerCase();
//       }
//       else {
//         new_str += this[i].toUpperCase();
//       }
//     }
//     return new_str;
//   }

//   const isLowerCase = (char) => char.toLowerCase() === char;
//   const swapCase = (char) => isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();
  
//   String.prototype.toAlternatingCase = function() {
//     return [...this].map(swapCase).join('');
//   };

//   String.prototype.toAlternatingCase = function () {
//     return this.replace(/./g, function (match) {
//       return /[a-z]/.test(match) ? match.toUpperCase() : match.toLowerCase();
//     });
//   }

//   String.prototype.toAlternatingCase = function () {
//     return this.replace(/[A-Za-z]/g, x => x > "Z" ? x.toUpperCase() : x.toLowerCase()) 
//   }