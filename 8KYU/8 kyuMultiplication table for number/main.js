// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

// PREP
// This kata is a string problem that involves math
// Since they want multiple strings and up to a certain number than we need to loop/iterate multiple times
// The kata wants to start at 1 and end at 10 in increments of 1 and be multiplied by the parameter number
// A template literal will allow me to make a string and do math inside of it
// I can then use the += operand to push the loop into the empty string I set up
// Each line needs to be broken up or "escaped" with the \n to break the strings into different lines
// I then need to trim any excess spaces with the .trim() method

function multiTable(number) {
    let str = ''
    for(let i = 1; i <= 10; i++){
      str += `${i} * ${number} = ${i * number}\n`
    }
    return str.trim()
  }

//   function multiTable(n) {
//     return [...Array(10)].map((_,i)=>`${i+1} * ${n} = ${n*i+n}`).join('\n')
//   }

//   const multiTable = (n) => {
//     const table = []
//     for(let i = 1; i <= 10; i++) {
//       table.push(`${i} * ${n} = ${i*n}`)
//     }
//     return table.join('\n')
//   }

//   const multiTable = number =>
//   [...Array(10)].map((_, idx) => `${++idx} * ${number} = ${idx * number}`).join(`\n`);