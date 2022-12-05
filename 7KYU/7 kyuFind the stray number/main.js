// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)
// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// function stray(numbers) {
//     return 0;
//   }

// We have an array of numbers with one unique value
// We need to return the one value that is unique
// We need to take each index and compare it to the others
// We can loop through the array
// Use the indexOf() method in numbers
// We can compare it to the lastIndexOf() method. and if it is return to return that number in the index
// If the first indexOf equals the lastIndexOf that makes it the only unique value in the array

function stray(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
  }

//   const stray = nums => nums.reduce((a, b) => a ^ b);

//   function stray(numbers) {
//     var a = numbers.sort();
    
//     if(a[0] != a[1]) {
//       return a[0]
//     } 
//     return a[a.length-1]
//   }

//   const stray = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));

//   function stray(numbers) {
//     var sort = numbers.sort();
//     if (sort[0] === sort[1]) {
//       return sort[sort.length-1]
//     }  else {
//       return sort[0]
//     }
      
//     }

// function stray(numbers) {
//     var num = numbers.sort(function(a,b){return a-b;});
//     return (num[0] === num[1]) ? num[num.length-1] : num[0];
//   }