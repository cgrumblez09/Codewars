// Write a class Block that creates a block (Duh..)

// ##Requirements

// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

// Define these methods:

// `getWidth()` return the width of the `Block`

// `getLength()` return the length of the `Block`

// `getHeight()` return the height of the `Block`

// `getVolume()` return the volume of the `Block`

// `getSurfaceArea()` return the surface area of the `Block`
// Examples
//     let b = new Block([2,4,6]) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
//     b.getWidth() // -> 2
    
//     b.getLength() // -> 4
    
//     b.getHeight() // -> 6
    
//     b.getVolume() // -> 48
    
//     b.getSurfaceArea() // -> 88
// Note: no error checking is needed

// Any feedback would be much appreciated

// PREP
// The Object created in this kata is a block/cube shape
// An array is the argument that is placed in the constructor parameter
// They need to be in order; width, length and height
// Methods need to created to return in the Object
// Two of the methods are calculations/geometry problems
// Numbers are to be expected in the array only

// We need to build out the constructor by adding the array and filling it
// Then need to use the this. to assigned each parameter/array
// We have the option to make volume/surface it own this.
// We need to look up the equations for each geometry problem
// We then create the methods/functions that will return each requirement

class Block{
    constructor([width , length , height]){
      this.width = width;
      this.length = length;
      this.height = height;
      this.volume = this.width * this.length * this.height;
      this.surface = 2 *((this.width * this.length) + 
                 (this.width * this.height) + 
                 (this.height * this.length)) 
    }
    getWidth(){
      return this.width;
    }  
    getLength(){
      return this.length;
    }
    getHeight(){
      return this.height;
    }
    getVolume(){
      return this.volume;
    }
    getSurfaceArea(){
      return this.surface;
    }
  }
//   class Block{
//     constructor(data){[this.w, this.l, this.h] = data}
//     getWidth(){return this.w}
//     getLength(){return this.l}
//     getHeight(){return this.h}
//     getVolume(){return this.h*this.l*this.w}
//     getSurfaceArea(){return 2*(this.h*this.w + this.w*this.l + this.h*this.l)}
//   }
//   class Block {
//     constructor(data){
//       [this.w, this.l, this.h] = data;
//     }
//     getWidth(){ return this.w }
//     getLength(){ return this.l }
//     getHeight(){ return this.h }
//     getVolume(){
//       let {l, w, h} = this;
//       return w*l*h;
//     }
//     getSurfaceArea(){
//       let {l, w, h} = this;
//       return 2 * (l*w + l*h + w*h);
//     }
//   }

//   class Block{

//     constructor(data){
//       this.width = data[0];
//       this.length = data[1];
//       this.height = data[2];
//     }
    
//     getWidth() {
//       return this.width
//     }
//     getLength() {
//       return this.length
//     }
//     getHeight() {
//       return this.height
//     }
//     getVolume() {
//       return this.width * this.length * this.height
//     }
//     getSurfaceArea() {
//       return 2 * (this.width * this.length + this.width * this.height + this.length * this.height)
//     }
//   }

// class Block {
//     constructor(data) {
//       this.a = data;
//     }
//     getWidth() {
//       let [w] = this.a;
//       return w;
//     }
//     getLength() {
//       let [, l] = this.a;
//       return l;
//     }
//     getHeight() {
//       let [, , h] = this.a;
//       return h;
//     }
//     getVolume() {
//       return this.getHeight() * this.getLength() * this.getWidth();
//     }
//     getSurfaceArea() {
//       return (
//         2 *
//         (this.getLength() * this.getWidth() +
//           this.getHeight() * this.getLength() +
//           this.getWidth() * this.getHeight())
//       );
//     }
//   }