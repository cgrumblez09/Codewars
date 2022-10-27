// Array Mappings
// Oh no, the map method for arrays has been disabled. Can you fix it?

// In case you haven't come across the map method for arrays, here is how it works:

// [1,2,3].map(x => x ** 2) === [1,4,9]
// [1,2,3].map(x => 2 * x) === [2,4,6]
// [1,2,3].map(x => 2 ** x) === [2,4,8]
// [1,2,3].map(x => x.toString()) === ["1","2","3"]
// ["1","2","3"].map(x => parseInt(x)) === [1,2,3]
// ["random","array","to","be","mapped"].map(x => mapping(x)) === [mapping("random"),mapping("array"),mapping("to"),mapping("be"),mapping("mapped")]
// The map method does not mutate the original array.

// PREP
// The .map() method is diabled for this kata
// We need to make a new Array.prototype for this
// One way to make a new array is to use the .push() method
// We need to do this in a object oriented way
// Start with Array.prototype.****
// Empty array to push to
// Loop through the array and push result to empty array
// Return new array
// Need to use this. notation for the parameter to be used

Array.prototype.map = function(arr){
    let newArr = []
    for (let i = 0; i < this.length; i++){
      newArr.push(arr(this[i]));
    }
    return newArr
  }
  
// Array.prototype.map = function(func) {
//     let newArray = [];
//     for (let item of this) {
//       newArray.push(func(item));
//     }
//     return newArray;
//   }

// Array.prototype.map = function(func){
//     var res = [];
//     this.forEach(function(...args){res.push(func(...args));});
//     return res;
//   }

// Array.prototype.map = function(mapper){ 
//     return this.reduce((array, item) => 
//     array.concat(mapper(item)), []); }

// const {runInNewContext} = require("vm")
// Array.prototype.map = runInNewContext("Array.prototype.map")

// Array.prototype.map = function(mapFunc) {
//     return Array.from(this, mapFunc);
//   }