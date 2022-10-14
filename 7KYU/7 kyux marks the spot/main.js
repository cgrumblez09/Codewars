// Given a two dimensional array, return the co-ordinates of x.

// If x is not inside the array, or if x appears multiple times, return [].

// The co-ordinates should be zero indexed in row-major order.
// You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

// Examples
// Input: []
// Return an empty array if input is an empty array => []

// Input: [
//   ['o', 'o'],
//   ['o', 'o']
// ]
// Return an empty array if no x found => []

// Input: [
//   ['x', 'o'],
//   ['o', 'x']
// ]
// Return an empty array if more than one x found => []

// Input: [
//   ['x', 'o'],
//   ['o', 'o']
// ]
// Return [0,0] when x at top left => [0, 0]

// Input: [
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
// ]
// Return [4,6] for the example above => [4, 6]

// PREP
// The problem is asking us to find the index of an array and a nested array that contains the value 'x'
// If more than one 'x' exist in the entire array we need to return array[]
// If no 'x' is found then we need to return and empty array [] meanthing there is a conditional somewhere
// An array is assumed to be the input
// There is no indication that values will be other than 'o' and 'x'


// We need to loop through the array first
// Once we loop and find the 'x' we need to pull that index of both arrays and set them aside
// We can push those indexes to an empty array
// We can either do a nested (double) loop or use the .indexOf() method, which finds the index of the value placed in the ()
// Those results will push to the empty array
// Once pushed, the array will either be empty or an array with values
// We can use the .length === 1 method to see if the array has a one array and if so to return the array/coordinates
// We use a conditioanl to check if the length is different to 1 and to return an empty array if so

const xMarksTheSpot = (input) => {
    let coords = []
  
    for (let i = 0; i < input.length; i++) {
      if (input[i].includes("x")) {
        coords.push([i, input[i].indexOf("x")])
      }
    }
    if (coords.length === 1) {
      return coords[0]
    } else {
      return []
    }
  }

//   const xMarksTheSpot = (input) => {
//     return loc = [], f = 0, input.map((a, x) => {
//       return a.map((b, y) => {
//         return loc = b === 'x' && (++f) ? [x, y] : loc, b;
//       });
//     }), f === 1 ? loc : [];
//   }

//   const xMarksTheSpot = (input) => {
//     const xs = input.filter(e => e.filter(e => e.indexOf('x') !== -1).length);
//     if (xs.length !== 1 || (xs.length === 1  && xs[0].filter(e => e === 'x').length !== 1)) return []
    
//     return input.map((e, idx) => e.map((x, idx2) => x === 'x' ? [idx, idx2] : '').filter(e => e !== '')).filter(e => e.length > 0)[0][0]
//   }

//   const xMarksTheSpot = (input) => {
//     var arr=[];
//     for (var i=0; i<input.length; ++i)
//       for (var j=0; j<input[i].length; ++j)
//         if (input[i][j]=='x')
//           arr.push([i,j]);
//     return arr.length==1?arr[0]:[];
//   }

  