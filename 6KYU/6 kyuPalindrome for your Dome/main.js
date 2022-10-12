// A palindrome is a word, phrase, number, or other sequence of symbols or elements, whose meaning may be interpreted the same way in either forward or reverse direction. Famous examples include "Amore, Roma", "A man, a plan, a canal: Panama" and "No 'x' in 'Nixon'". - wikipedia

// Our goal is to determine whether or not a given string is a valid palindrome or not.

// Like the above examples, here are a few test cases which are also populated:

// "Amore, Roma" => valid
// "A man, a plan, a canal: Panama" => valid
// "No 'x' in 'Nixon'" => valid
// "Abba Zabba, you're my only friend" => invalid
// You can see that they are case insensitive and disregards non alphanumeric characters. In addition to a few predefined tests, your function will also be tested against a random string generator 50 times which are guaranteed to produce valid palindromes.

// Notes:

// The empty string "" can be read forward or backward the same, it's a palindrome in our case.

// PREP
// First we need to make the string into an array
// Once that is done we need to make the letters in the array all lower case to help match type and value
// We then need to get rid of anyything that is not a letter. Punctuation, numbers or spaces/empty strings
// We can then join the array to one string and use that to check if it is a palindrom

// Use the toLowerCase()method to make the string lowercase and split('') the array
// Use the filter method to filter out anything that is not a letter
// trim() removes ANY excess spaces and the Regex /^[a-z\s]/.test(x) to find ONLY letters
// Then join('') the array and compare it to the reverse() of the array/string

function palindrome(string) {
  
    let str = string.toLowerCase().split('').
    filter(x => x.trim() && /^[a-z\s]/.test(x)).join('');
      
    let revStr = str.split('').reverse().join('')
    
    return str === revStr
  //   if(str === revStr){
  //     return true
  //   }
  //   else{
  //     return false
  //   }
  }

//   function palindrome(string) {
//     var sanitized = string.replace(/[^A-Za-z]/g, "").toLowerCase();
//     return sanitized == sanitized.split("").reduceRight(function(sum, v) {return sum + v;});
//   }

//   function palindrome(string) {
//     var s = string.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
//     for (var i = 0; i < s.length/2; i++) if (s[i] != s[s.length-i-1]) return false;
//     return true;
//   }

//   function palindrome(string) {
//     var s = string.toLowerCase().replace(/[^a-z0-9]+/g, '');
//     return s == s.split('').reduce(function(str, value) {
//       return value+str;
//     }, '');
//   }

//   function palindrome (string) {
//     var letters = string.toLowerCase().match(/\w/g);
//     var a, b;
//     for (a = 0, b = letters.length - 1; a < b && b > a; a++, b--) {
//       if (letters[a] !== letters[b]) return false;
//     }
    
//     return true;
//   }

//   function palindrome(string) {
//     return string.toLowerCase().replace(/[^a-z]/gi,'').split('').every(function(a,b,c){
//       return a===c[c.length-b-1]
//     })
//   }