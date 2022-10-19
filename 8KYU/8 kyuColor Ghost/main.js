// Color Ghost

// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

// PREP
// We need to have an object "Ghost" return a random color
// There will be no parameters
// There is no guide as to how to structure the object
// No other colors are needed outsire of "white" or "yellow" or "purple" or "red"
// Needs to work when a new variable is used further in the code

// For this kata we need to remember when working with objects to use the this.
// We need an array of color options
// We then need to generate a random number that will work across the array length
// We then combine the two to use the random number to pull the value out of the array index


var Ghost = function() {
    this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * 4)];
  };

  let ghost = new Ghost()
  console.log(ghost.color)


//   var Ghost = function() {
//     this.arr = ["white","yellow","purple","red"]
//     this.rand = Math.floor(Math.random() * colors.length)
//     this.color = this.arr[this.rand]
//   //   this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * colors.length)];
//   };