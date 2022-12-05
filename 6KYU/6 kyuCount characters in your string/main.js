// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// function count (string) {  
//     // The function code should be here
//      return {};
//   }

// We have a string
// The function needs to return an object with a key value pair
// The key is a character and the value is a count
// If the string is empty return an empty object literal
// Start with and empty object literal variable
// Split the string and either loop or forEach method 
// Use a conditioanal to check the split string in the object literal variable
// use bracket notation EX) count[s]
// If count[s] then add to the count
// Else the count of a single occuring character is 1

function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }

//   function count (string) {
//     return string.split('').reduce(function(counts,char){
//       counts[char] = (counts[char]||0) + 1;
//       return counts;
//     },{});
//   }

//   function count (string) {
//     var result = {};
    
//     for(let i = 0; i < string.length; i++) {
//       if(result.hasOwnProperty(string[i])){
//         result[string[i]] += 1;
//       } else {
//         result[string[i]] = 1;
//       }
//     }
    
//     return result;
//   }

//   function count (string) {  
//     return string.split("").reduce(function(obj, elem) {
//       if (elem in obj)
//         obj[elem]++;
//       else
//         obj[elem] = 1;
//       return obj;
//     }, {});
//   }

//   const count = string =>
//   [...string].reduce((pre, val) => (pre[val] = -~pre[val], pre), {});