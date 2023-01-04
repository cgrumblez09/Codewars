// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:

// h = 0
// m = 1
// s = 1

// result = 61000

// Input constraints:

//     0 <= h <= 23
//     0 <= m <= 59
//     0 <= s <= 59

// function past(h, m, s){
//     //#Happy Coding! ^_^
//   }

  // We have three parameters of hour, minute and seconds
  // We need to return total number of MILLISECONDS in the function
  // First look up the amount of ms in each value
  // We can then use a simple equation multiplying each value by the amount of ms in each parameter and add them up

function past(h, m, s){
  console.log(h*3600000 + m*60000 + s*1000)
  return h*3600000 + m*60000 + s*1000
}