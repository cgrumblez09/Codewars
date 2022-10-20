// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.
// More examples in the test cases.
// Good luck!
// If you like this Kata, please try:
// Sum of prime-indexed elements
// Sum of integer combinations

// function repeats(arr){
// };
// describe("Basic tests", function(){
// Test.assertEquals(repeats([4,5,7,5,4,8]),15);
// Test.assertEquals(repeats([9, 10, 19, 13, 19, 13]),19);
// Test.assertEquals(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
// Test.assertEquals(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
// Test.assertEquals(repeats([5, 10, 19, 13, 10, 13]),24);
// });

//arr -> filter single values -> reduce
//index of num is last index of num

function repeats(arr){
    return arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n)).reduce((a , c) => a + c, 0)
  };
  
// function repeats(arr) {
//     let seen = new Set();
//     let sum = 0;
    
//     for (let v of arr) {
//       if (!seen.has(v)) {
//         seen.add(v);
//         sum += v;
//       } else {
//         sum -= v;
//       }
//     }
    
//     return sum;
//   };
//   function repeats(arr) {
//     let set = new Set()
//     arr.forEach(x => set.has(x) ? set.delete(x) : set.add(x))
//     return [...set].reduce((s,v) => s+v, 0)
//   }
//   const repeats = (arr) => [0,...arr].
//                   reduce((acc,el,_,arr) => arr.
//                   filter(e=> e === el).
//                   length < 2 ? acc + el : acc)