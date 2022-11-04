// The owner of the doggy daycare wants to know whether she can accept new dogs into her daycare and needs to check whether they have been wormed and vaccinated in order to accept them either by themselves or as well as other dogs.

// There is a Dog prototype (class in Ruby) that needs to be extended with the method checkDog (check_dog). Dog currently has the following properties (attributes):

// name
// age
// breed
// vaccinated
// wormed
// You'll need to return the dog's name each time as well as " can be accepted", " can only be accepted by itself" and " can not be accepted".

// If the dog is vaccinated and wormed, the dog can be accepted.
// If the dog is only vaccinated or only wormed, the dog can only be accepted by itself.
// If the dog has not be vaccianted or wormed, the dog can not be accepted.
// Example:

// var spot = new Dog("Spot", 5, "Labrador", true, false);
// spot.checkDog(); // Should return: "Spot can only be accepted by itself".

// PREP
// We are asked to make a prototype function for Dog
// There is Dog prototype that already exist and needs to be extended
// We are given the 5 parameters in the original prototype (name, age, breed, vaccinated, wormed) 
// We need to check the conditions of vacc and wormed and return each combination of possible
// Keep in mind there is no Class Dog, rather Dog.prototype and we can add the .checkDog method and make a function from there

Dog.prototype.checkDog = function() {
    if (this.vaccinated && this.wormed) return `${ this.name } can be accepted`;
    if (this.vaccinated || this.wormed) return `${ this.name } can only be accepted by itself`;
    return `${ this.name } can not be accepted`;
  };

//   Dog.prototype.checkDog = function () {
//     return `${this.name} ${this.vaccinated && this.wormed ? `can be accepted` : this.vaccinated || this.wormed ? `can only be accepted by itself` : `can not be accepted`}`;
//   };

//   Dog.prototype.checkDog = function(){
//     if (this.vaccinated === true && this.wormed === true) return this.name + " can be accepted";
//     if (!(this.vaccinated && this.wormed) && (this.vaccinated || this.wormed)) return this.name + " can only be accepted by itself"
//     return this.name + " can not be accepted";
//   }

//   function Dog(name, age, breed, vaccinated, wormed){
//   this.name = name;
//   this.age =age;
//   this.breed = breed;
//   this. vaccinated = vaccinated;
//   this.wormed = wormed;
  
//   this.checkDog = function(){
//     var acceptance = '';
//   if(this.vaccinated === true && this.wormed === true){
//     acceptance = ' can be accepted';
//   }else if (this.vaccinated === true || this.wormed === true){
//     acceptance = ' can only be accepted by itself';
//   } else {
//     acceptance = ' can not be accepted';
//   }
  
//   return this.name + acceptance;
  
//   }
  
// }