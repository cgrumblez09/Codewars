// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1) returns 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

// PREP
// We have a parameter n that is a number and a digit that is between 0-9
// Number will always be positive
// We need to square all the number between 0 and the n(umber) parameter
// We then need to count EVERY instance of the parameter d(igit) in the square results
// Multiple instances can occur in the same value EX) 121 has two number 1

// First we need to iterate over the n parameter to come up with multiple results
// Since we decided to loop we need an empty array to push the result of the loop to
// Once we loop through and push the results of square each number up to the n parameter we need to decide how to count every occurance of d(igit)
// We can either add a count variable or find the length of an array by filtering the d(igit) parameter
// After pushing the result to the new array (arr) I decided string the result in array and join to make a huge string
// Once joined I split the arr again so each number is now in its own array
// I can then filter out the number to match the String(d) to make a new array
// With the new array we can take the length which is the total number of occurences of the d(igit)
function nbDig(n, d){
    //   console.log(n , d)
      let arr = [];
      for(let i = 0; i <= n; i++){
        let sqr = i ** 2
        arr.push(String(sqr))
      }
    //   console.log(arr.join('').split('').filter(x => x == String(d)).length)
      let res = arr.join('').split('').filter(x => x == String(d)).length
    
      return res
}

// function nbDig(n, d) {
//     var res=0;
//         for (var g=0;g<=n;g++){
//           var square=(g*g+"").split("");
//           square.forEach((s)=>s==d?res++:null)
//         }return res;
//     }
// function nbDig(n, d) {
//         var o = '';
//           for(var i = 0; i <= n; i++){
//             o += Math.pow(i, 2);
//           }
//         return o.split(d).length-1
//       }

//       nbDig = (n, d) => Array.from(Array(n + 1), (e, i) => i * i).join('').match(new RegExp(d, 'g')).length;

//       function nbDig(n, d) {
//         let count = '';
//         const re = RegExp(d, 'g');
//         for (let i = 0; i <= n; i++){
//           count += i**2;
//         }
//         return count.match(re).length;  
//       }

//       const nbDig = (n, d) => {
//         let re = new RegExp(d, 'g');
//         return Array(...Array(n + 1))
//           .reduce((s, v, i) => s + ((i * i + '').match(re) || []).length, 0);
//       }