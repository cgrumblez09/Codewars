// Math Object Madness
// You are a(n) novice/average/experienced/senior/professional/world-class Developer (choose one) who specialises in Javascript. One day, your naughty little brother/sister/whatever gets hold of your precious computer with all the software and functionality in it and manages to utterly destroy the Javascript Math object! Being the Developer that you are, you decide to recover as much of the functionality as possible.

// Objective
// Most, if not all, of the functionality of Javascript's built-in Math object is disabled. Your goal is to recover the following:

// Math.ceil(x)
// Math.floor(x)
// Math.round(x)
// Math.abs(x)
// Math.max(args[]) (CAUTION: A variable number of arguments will be passed into the function)
// Math.min(args[]) (CAUTION: A variable number of arguments will be passed into the function)
// Math.pow(x,y) (you may assume the exponent is always a positive integer)
// You may also attempt to fix other methods such as Math.random() or Math.cos() but your code for the other methods will not be tested.

// Credits
// The idea of this Kata is not entirely original; credits go to BattleRattle's "Math Issues" for inspiring me to make this Kata.

// Prep
// We need to make an Object for math methods that are disabled
// Only digits are used in the kata
// Must work with long decimal places
// for Math.ceil if the number is whole we return it. Else we need to return the higher digit
// We can use the remainder/modulous to find the decimal places and either add it ceil or minus to floor
// For Math.floor returns the whole digit rounded down. 
// For Math.round we need to see if the number is greater or less than number.5 and round accordingly
// For Math.max we need to spread the array and sort high to low and pull the 0 index which is the highest
// For Math.min we can do the same as max but sort low to high
// For Math.pow we can add a second parameter that can be the exponent and use ** to make a formula
Math.ceil = function (x) {
    return x % 1 == 0 ? x : Math.floor(x) + 1;
  }
  
  Math.floor = function(x) {
    return x - (x % 1);
  }
  
  Math.round = function(x) {
    return x % 1 >= 0.5 ? Math.ceil(x) : Math.floor(x);
  }
  
  Math.abs = function(x) {
    return x < 0 ? x * -1 : x;
  }
  
  Math.max = function(...args) {
    return args.reduce((x, y) => x > y ? x : y);
  }
  
  Math.min = function(...args) {
    return args.reduce((x, y) => x < y ? x : y);
  }
  
  Math.pow = function(x, y) {
    return y > 0 ? [...Array(y)].map(() => x).reduce((x, y) => x * y) : 1;
  }

//   Math.ceil = x=> x%1==0 ? x : x-x%1+1;
//   Math.floor = x=> x-x%1;
//   Math.round = x=> x%1==0 ? x : x-x%1+(x%1>=.5 ? 1:0);
//   Math.abs = x=> x<0 ? -x : x;
//   Math.max = function (...x) {return x.sort((a,b)=>b-a)[0];}
//   Math.min = function (...x) {return x.sort((a,b)=>a-b)[0];}
//   Math.pow = function (x,y) {var rs=1; while (y--) rs*=x; return rs;}

// Math.ceil = (x) => x === (x | 0) ? x : (x + 1) | 0
// Math.floor = (x) => x | 0
// Math.round = (x) => (x + 0.5) | 0
// Math.abs = (x) => x < 0 ? -x : x
// Math.max = (...xs) => xs.reduce((x, y) => x > y ? x : y)
// Math.min = (...xs) => xs.reduce((x, y) => x < y ? x : y)
// Math.pow = (x, n) => n > 0 ? x * Math.pow(x, n - 1) : 1

// Math.ceil = function(x) {
//     let y = parseInt(x);
//     if (x > y)
//       y++;
//     return y;
//   }
  
//   Math.floor = function(x) {
//     return parseInt(x);
//   }
  
//   Math.round = function(x) {
//     return parseInt(x + 0.5);
//   }
  
//   Math.abs = function(x) {
//     return x >= 0 ? x : -x;
//   }
  
//   Math.max = function(...args) {
//     return args.reduce((x, y) => x >  y ? x : y, args);
//   }
  
//   Math.min = function(...args) {
//     return args.reduce((x, y) => x <  y ? x : y, args);
//   }
  
//   Math.pow = function(base, exp) {
//     return base ** exp;
//   }