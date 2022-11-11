// A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.

// In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:

// "not picking" --> "pot nicking"

// Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example. A "word" in the context of this kata can contain any of the letters A through Z in upper or lower case, and the numbers 0 to 9. Though spoonerisms are about letters in words in the domain of written and spoken language, numbers are included in the inputs for the random test cases and they require no special treatment.

// NOTE: All input strings will contain only two words. Spoonerisms can be more complex. For example, three-word phrases in which the first letters of the first and last words are swapped: "pack of lies" --> "lack of pies" or more than one letter from a word is swapped: "flat battery --> "bat flattery" You are NOT expected to account for these, or any other nuances involved in spoonerisms.

// Once you have completed this kata, a slightly more challenging take on the idea can be found here: http://www.codewars.com/kata/56dbed3a13c2f61ae3000bcd

// We are given two words in a single string
// We need to swap out the first letter of each word and return the string
// Capital letters, numbers and special characters do not matter
// We can split the word
// Put the first letter of each word in a variable
// Then combine the variable with the string words and slice the first letter in the word


function spoonerize(words) {
    let word = words.split(' ')
    let first = word[0][0]
    let second = word[1][0]
    let result = second + word[0].slice(1) + ' ' + first + word[1].slice(1)
    return result
  }

//   function spoonerize(words) {
//     let word = words.split(' ')
//     return [word[1][0] + word[0].slice(1), word[0][0] + word[1].slice(1)].join(' ')
// }

// function spoonerize(words) {
//     let [a, b] = words.split(" ");
//     [a, b] = [b[0] + a.slice(1), a[0] + b.slice(1)];
    
//     return [a, b].join(" ");
//   }

//   const spoonerize = ( $ ) => $.replace(/^(\w)(\w* )(\w)(\w*)$/, '$3$2$1$4');

//   function spoonerize(words) {
//     var arr = words.split(' '),
//         sub1 = arr[0].substr(0,1),
//         sub2 = arr[1].substr(0,1);
  
//     return arr[0].replace(sub1, sub2) + ' ' + arr[1].replace(sub2, sub1);
//   }
