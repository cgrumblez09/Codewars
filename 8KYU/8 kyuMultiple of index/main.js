// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

// PREP
// For this I need to start by setting up and empty array to push the solution to. Maybe another method will worl
// I need to loop through the array and use an if statement or ternory to check the array
// If loop/index matches the condition, we will push the index to a new array
// Return the new array

function multipleOfIndex(array) {
    let arr = [];
    for(let i = 0; i < array.length; i++){
      if(array[i] % i == 0){
        console.log(array[i])
        arr.push(array[i])
      }
    }
    return arr
  }

//   function multipleOfIndex(array) {
//     return array.filter((num, i) => num % i === 0);
//   }

//   let multipleOfIndex = a => a.filter((n, i) => n % i === 0);