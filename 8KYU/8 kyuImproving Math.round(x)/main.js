// Task
// Your task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.

// You may find the following Math methods useful:

// Math.round(x) (of course)
// Math.pow(x,y) (returns x to the power of y - e.g. Math.pow(3,4) == 81)

// PREP
// This is a straight forward kata. Making a function within an Object to round a number to a decimal place in the parameter
// The number will have a given number with decimal places and the precision parameter is a whole number

// We can use the toFixed method to get the numbers fixed decimal place
// The toFixed method converts a number into a string
// We need to make sure the returned amount is a number so we use the Number() or +() to make the function a number instead of a string


Object.prototype.roundTo = function (number, precision) {
    this.number = number
    this.precision = precision
    return Number(this.number.toFixed(this.precision))
  }

//   Math.roundTo = (number, precision) => Number(number.toFixed(precision))

// Math.roundTo = function (number, precision) {
//     return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
//   }

// Math.roundTo = function (number, precision) {
//     return +(number.toFixed(precision));
//  }

// Math.roundTo = function (number, precision) {
//     return Number(number.toFixed(precision));
//   }