// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b

// PREP
// We start with two string a and b
// We need to compare which string is longer
// We take the larger string, split it, reverse and join it
// We place the reversed longer string in between the shorter string
// Concatenate
// If both string are equal the a string will be considered the longer string

function shorter_reverse_longer(a,b){
    if(a.length < b.length){
      console.log(a + b.split('').reverse().join('') + a)
      return a + b.split('').reverse().join('') + a
    }
    else{
      console.log(b + a.split('').reverse().join('') + b)
      return b + a.split('').reverse().join('') + b
    }
  }

//   function shorter_reverse_longer(a,b){
//     return a.length >= b.length ? b + a.split('').reverse().join('') + b :
//     a + b.split('').reverse().join('') + a;
//   }

// var shorter_reverse_longer = function(a,b) {
//     var longest = a.length >= b.length ? a : b;
//     var shortest = a.length >= b.length ? b : a;
//     return shortest + longest.split('').reverse().join('') + shortest;
//   }

// function shorter_reverse_longer(a,b){
//     if (a.length >= b.length) [a,b] = [b,a];
//     return a + b.split('').reverse().join('') + a;
//   }


