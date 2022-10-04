// Scenario
// the rhythm of beautiful musical notes is drawing a Pendulum

// Beautiful musical notes are the Numbers

// Task
// Given an array/list [] of n integers , Arrange them in a way similar to the to-and-fro movement of a Pendulum

// The Smallest element of the list of integers , must come in center position of array/list.

// The Higher than smallest , goes to the right .
// The Next higher number goes to the left of minimum number and So on , in a to-and-fro manner similar to that of a Pendulum.

// !alt
// Notes
// Array/list size is at least 3 .

// In Even array size , The minimum element should be moved to (n-1)/2 index (considering that indexes start from 0)

// Repetition of numbers in the array/list could occur , So (duplications are included when Arranging).

// Input >> Output Examples:
// pendulum ([6, 6, 8 ,5 ,10]) ==> [10, 6, 5, 6, 8]

function pendulum(values) {

    let sort = values.slice().sort((a, b) => a - b)
    ,  parts = { left: [], right: [] };
    
    for (let i = 0; i < sort.length; i++) 
      parts[i % 2 ? 'right' : 'left'].push(sort[i]);
  
    return parts.left.reverse().concat(parts.right);
    
  }
//   const pendulum = values =>
//     values.sort((a, b) => a - b).reduce((pre, val) => pre.length % 2 ? 
//     [...pre, val] : [val, ...pre], []);
//   function pendulum(values, l = values.length) {
//     values.sort((min, max)=> max-min)
//     const arr = [];
//     for (let i=0; i < l; i++){
//       if (i % 2 === 0){ 
//         arr.unshift(values.pop()) 
//       }else{
//         arr.push(values.pop())
//       }
//     }
//     return arr
//   }
//   function pendulum(a) {
//     let list = [], arr = [];
//     a.sort((b, c) => b - c).forEach((e, i) => (i % 2 ? arr : list).push(e));
//     return list.reverse().concat(arr);
//   }
//   function pendulum(v, arr = v.sort((a, b)=> a - b), out = []) {
//       return arr.map((el, i) => i % 2 ? out = [...out, el] : out = [el,...out] )[v.length-1]
//   }
//   function pendulum(values) {
//     const newVal = values.sort((a,b)=>a-b);
//     let res = []
//     for (let i in newVal){
//       if (i ===0){
//         res.push(newVal[i]);
//       }else if (i%2){
//         res.push(newVal[i]);
//       }else{
//         res.unshift(newVal[i]);
//       }
//     }
//       return res;
//   }