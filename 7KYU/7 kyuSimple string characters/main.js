// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.

// More examples in the test cases.

// Good luck!

// PREP
// We start with a string
// For every uppercase, lowercase, number and special char we need to add each instance of to a total count
// We need to either loop through the string or target/match with regex
// We can set up an array with 4 index starting at 0 and add to each index when a match is made
// We can use an if/switch statement to check what each index value is
// We can then return the array

const solve = (string) => (
    Object.values([...string].reduce((acc, char) => {
      if (/[A-Z]/.test(char)) {
        acc.upper++;
      } else if (/[a-z]/.test(char)) {
        acc.lower++;
      } else if (/[0-9]/.test(char)) {
        acc.number++;
      } else {
        acc.other++;
      }
      return acc;
    }, { upper: 0, lower: 0, number: 0, other: 0 }))
  );

//   const solve = x => {
//     let u = x.match(/[A-Z]/g)||[]
//     let d = x.match(/[a-z]/g)||[]
//     let n = x.match(/[0-9]/g)||[]
//     let s = x.match(/[^A-Z0-9]/gi)||[]
//     return [u.length, d.length, n.length, s.length]
//   }

//   const solve = (s) => {
//     let result = [0, 0, 0, 0];
//     for (let i = 0; i < s.length; i += 1) {
//       if (s[i].toLowerCase() > s[i]) {
//         result[0] += 1;
//       } else if (s[i].toUpperCase() < s[i]) {
//         result[1] += 1;
//       } else if (s[i] >= 0 && s[i] <= 9) {
//         result[2] += 1;
//       } else {
//         result[3] += 1;
//       }
//     }
//     return result;
//   };
  
// function solve(s){
//    let res = Array.from({length:4}, ()=> 0)
//    for(let v of s){
//      let vl = v.toLowerCase(), vu = v.toUpperCase()
//      if(!Number.isNaN(+v)) res[2]++
//      else if(vl === vu)    res[3]++
//      else if(v === vl)     res[1]++
//      else if(v === vu)     res[0]++
//    }
//    return res
// }