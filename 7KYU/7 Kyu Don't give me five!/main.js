// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

// PREP
// First I need to get the the numbers into an array with a foor loop
// Once mapped out I need to search the array and exclude any numbers that have 5 in it including double and triple digits

function dontGiveMeFive(start, end){
    let count = 0
    for(let i = start; i <= end; i++){
        count = String(i).includes('5') ? count : count + 1
    }
    return count
  }

// function dontGiveMeFive(start, end) {
//     let count = 0;

//     for (let i = start; i <= end; ++i)
//         if (!i.toString().includes("5"))
//             count++;

//     return count;
// }

// function dontGiveMeFive(start, end) {
//     let count = 0
//     for (let i = start; i <= end; i++) {
//       if (!/5/.test(i)) {
//         count++
//       }
//     }
//     return count
//   }

//   function dontGiveMeFive(start, end){
//     let res = [];
//     for (let i = start; i <= end; i++) {
//       if (!i.toString().includes('5')) res.push(i);
//     }
//     return res.length;
//   }
//   dontGiveMeFive = (s,e) => {
//     for (var cnt = 0;s <= e;++s)
//       (s+'').includes('5') || cnt++
//     return cnt 
//   }