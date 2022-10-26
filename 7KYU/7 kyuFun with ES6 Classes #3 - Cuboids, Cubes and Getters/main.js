// Task
// Define the following classes.

// I. Cuboid
// The object constructor for the class Cuboid should receive exactly three arguments in the following order: length, width, height and store these three values in this.length, this.width and this.height respectively.

// The class Cuboid should then have a getter surfaceArea which returns the surface area of the cuboid and a getter volume which returns the volume of the cuboid.

// II. Cube
// class Cube is a subclass of class Cuboid. The constructor function of Cube should receive one argument only, its length, and use that value passed in to set this.length, this.width and this.height.

// Hint: Make a call to super, passing in the correct arguments, to make life easier ;)

// Related Articles
// Listed below are a few articles of interest that may help you complete this Kata:

// Stack Overflow - What are getters and setters in ES6?
// getter - Javascript | MDN

// PREP
// We are given plenty of info on where to start with the class Cuboid
// Start with making the constructor with l w h parameters
// Assign this to each parameter
// Make the get surfaceArea() method with the correct formula and return it
// Make the get volume() method with correct formula
// Need to look up the formulas
// The class Cube needs one parameter l in the constructor becuase all sides are equal
// We can super the parameters in the Cuboid class l w h with just l l l

class Cuboid {
    constructor(length, width, height) {
      Object.assign(this, { length, width, height })
    }
    get surfaceArea() {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
    get volume() {
      return this.length * this.width * this.height
    }
  }
  class Cube extends Cuboid {
    constructor(length) {
      super(length, length, length)
    }
  }

//   class Cuboid {
//     constructor(length, width, height) {
//       this.length = length;
//       this.width = width;
//       this.height = height;
//     }
//     get volume() {
//       return this.length * this.width * this.height;
//     }
//     get surfaceArea() {
//       return 2 * (this.length * this.width + this.width * this.height + this.height * this.length);
//     }
//   }
//   class Cube extends Cuboid {
//     constructor(length) {
//       super(length, length, length);
//     }
//   }

// class Cuboid{
//     constructor(length, width, height){
//       this.length = length;
//       this.width = width;
//       this.height = height;
//     }
//     get surfaceArea(){
//       return 2 * this.length * this.width + 2 * this.width * this.height + 2 * this.length * this.height
//     }
//     get volume(){
//       return this.length * this.width * this.height
//     }
//   }
  
//   class Cube extends Cuboid{
//     constructor(length){
//       super(length)
//       this.width = length
//       this.height = length
//     }
//     get surfaceArea(){
//       return super.surfaceArea
//     }
//     get volume(){
//       return super.volume
//     }
//   }