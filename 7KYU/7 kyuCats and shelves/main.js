// An infinite number of shelves are arranged one above the other in a staggered fashion.
// The cat can jump up to 3 shelves at the same time: from shelf 1 to shelf 2 or 4 (the cat cannot climb on the shelf directly above its head), according to the illustration:

//                  ┌────────┐
//                  │-6------│
//                  └────────┘
// ┌────────┐       
// │------5-│        
// └────────┘  ┌─────► OK!
//             │    ┌────────┐
//             │    │-4------│
//             │    └────────┘
// ┌────────┐  │
// │------3-│  │     
// BANG!────┘  ├─────► OK! 
//   ▲  |\_/|  │    ┌────────┐
//   │ ("^-^)  │    │-2------│
//   │ )   (   │    └────────┘
// ┌─┴─┴───┴┬──┘
// │------1-│
// └────────┘

// Input

// Start and finish shelf numbers (always positive integers, finish no smaller than start)
// Task

// Find the minimum number of jumps to go from start to finish
// Example

// Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)

// PREP
// Find the number of times a cat can jump from the starting floor to the finish floor
// Cat can jump either 1 floor or 3 floors, not 2 since it would hit the floor above its head
// If there is a remainder of floors that are not able to jump by 3 we need to add those floors as well
// We need to total number of floors first
// Then we need to see how many times the cat can jump 3 floors until it can no longer jump 3 floors
// We need to take that number and add the remaining floors to to the total already jumped

function solution(start, finish) {
    return Math.floor((finish - start) / 3) + (finish - start) % 3
  }

//   function solution(start, finish) 
//   {
//     let stepsToClimb = finish-start
  
//     let numBigJumps = Math.floor(stepsToClimb/3)
  
//     let numSmallJumps = stepsToClimb % 3
  
//     return numBigJumps + numSmallJumps
//   }

//   const solution = (() => {
//     const jump = n => Math.floor(n / 3) + n % 3;
//     return (m, n) => jump(n - m);
//   })();

// function solution(start, finish) {
//     let jumps = 0;
//     let iFinish = 0;
//     for (let i = start; i < finish; i+=3) {
//       jumps ++
//       iFinish = i;
//     }
//     if ((iFinish+3) - finish === 1) {jumps++}
//     return jumps;
//   }