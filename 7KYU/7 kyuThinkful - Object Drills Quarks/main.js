// You're modelling the interaction between a large number of quarks and have decided to create a Quark class so you can generate your own quark objects.

// Quarks are fundamental particles and the only fundamental particle to experience all four fundamental forces.

// Your task
// Your Quark class should allow you to create quarks of any valid color ("red", "blue", and "green") and any valid flavor ('up', 'down', 'strange', 'charm', 'top', and 'bottom').

// Every quark has the same baryon_number (BaryonNumber in C#): 1/3.

// Every quark should have an .interact() (.Interact() in C#) method that allows any quark to interact with another quark via the strong force. When two quarks interact they exchange colors.

// Example
// >>> q1 = Quark("red", "up")
// >>> q1.color
// "red"
// >>> q1.flavor
// "up"
// >>> q2 = Quark("blue", "strange")
// >>> q2.color
// "blue"
// >>> q2.baryon_number
// 0.3333333333333333
// >>> q1.interact(q2)
// >>> q1.color
// "blue"
// >>> q2.color
// "red"

// PREP
// 

// We start by making a constructor with three parameters for color, flavor and the equation
// We assign this. to each of the parameters in the constructor
// I thought at first the baryon_number parameter was supposed to be a method in the Object, this was wrong
// We then need the interact() method with a parameter, this case I used col
// We then need to make variables to store values of the Objects color and the parameter/arguments color
// We then reassign the colors to swap them and return the swapped colors

class Quark{
    constructor(color , flavor, baryon_number){
      this.color = color
      this.flavor = flavor
      this.baryon_number = 1/3
    }
    interact(col){
      let one = this.color;
      let two = col.color
      this.color = two
      col.color = one
      console.log(one, two)
    }
  }
  let q1 = new Quark('red' , 'up')
  let q2 = new Quark('blue' , 'strange')
  // console.log(q1.interact(q2))

//   class Quark {
//     constructor(color, flavor) {
//       Object.assign(this, {color, flavor, baryon_number: 1 / 3});
//     }
  
//     interact(quark) {
//       [this.color, quark.color] = [quark.color, this.color];
//     }
//   }

// class Quark {
//     constructor(color, flavor) {
//       this.color = color
//       this.flavor = flavor
//       this.baryon_number = 1 / 3
//     }
//     interact(other) {
//       [this.color, other.color] = [other.color, this.color]
//     }
//   }

// class Quark{
//     baryon_number = 1/3
//     constructor(color,flavor){
//       this.color = color
//       this.flavor = flavor
//     }
//     interact(another){
//       const bufer_color = another.color
//       another.color = this.color
//       this.color = bufer_color
//     }
//   }

