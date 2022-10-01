// In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
// Your task is to return a new sequence of dimensions, sorted ascending by area.

// For example,

// const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
// sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]



function area(shape) {
    if (typeof shape === 'object')
      return shape[0] * shape[1];
    else
      return Math.PI * Math.pow(shape, 2);
  }
  
//   function sortByArea(array) {
//     return array.slice(0).sort((a, b) => area(a) - area(b));
//   }
//   const sortByArea = a => {
//     const getArea = i => Array.isArray(i) ? i[0] * i[1] : Math.PI * i * i;
//     return [...a].sort((i, j) => getArea(i) - getArea(j));
//   }
//   const sortByArea = array => 
//         [...array].sort((a, b) => (typeof a === 'object' ? a[0] * a[1] : Math.PI * a**2) - (typeof b === 'object' ? b[0] * b[1]
//    : Math.PI * b**2))
//   function sortByArea(array) {
//     let array2 = [...array]
//     return array2.sort((a, b) => {
//       a = a.length === 2 ? a[0]*a[1] : Math.PI*(a**2)
//       b = b.length === 2 ? b[0]*b[1] : Math.PI*(b**2)
//       return a - b
//     })}