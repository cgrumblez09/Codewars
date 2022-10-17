// Objective
// Preloaded for you is a class Dog:

// class Dog {
//   constructor(name, age, gender, species, size, master, loyal) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.species = species;
//     this.legs = 4;
//     this.size = size;
//     this.master = master;
//     this.loyal = loyal;
//   }
// }
// You are then given a working class Labrador as your initial code.

// class Labrador {
//   constructor(name, age, gender, master) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.species = "Labrador";
//     this.legs = 4;
//     this.size = "Large";
//     this.master = master;
//     this.loyal = true;
//   }
// }
// Shorten it so that it meets the strict character count requirements for this Kata.

// Quick, get your timer out and get ready to time yourself. Are you ready? Ready, get set, GO!!! :D

// PREP
// We are given a class Dog and a class Labrador that inherits from Dog
// The kata wants us to shorten the class Labrador to be more efficient


// To make the Labrador class short we can extend it into the Dog class
// To do this we use the syntax Class Labrador extends Dog
// A constructor is need to assign the parameters that can change. Dogs don't always have the same name for example
// super is used to inherit from the parent class Dog
// the other parameters that are not super are specific to Labrador such as "Labrador" "large"

class Labrador extends Dog {
    constructor(name, age, gender, master) {
      super(name, age, gender, "Labrador", "Large", master, true);
    }
  }

//   class Labrador {
//     constructor(n, a, g, m) {
//       this.name = n, this.age = a, this.gender=g, this.species="Labrador",
//       this.legs = 4, this.size = "Large", this.master = m, this.loyal = true;
//     }
//   }

//   class Labrador{
//     constructor(name, age, gender, master) {
//       Object.assign(this, {name,age,gender});
//       this.species = "Labrador";
//       this.legs = 4;
//       this.size = "Large";
//       this.master = master;
//       this.loyal = true;
//     }
//   }