// The following code could use a bit of object-oriented artistry. While it's a simple method and works just fine as it is, in a larger system it's best to organize methods into classes/objects. (Or, at least, something similar depending on your language)

// Refactor the following code so that it belongs to a Person class/object. Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call.

// Here is how the final refactored code would be used:

// var joe = new Person('Joe');
// joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
// joe.name           // should 

// PREP
// We need to make this function into a class
// Each person will have a greet method with the persons name included in the greeting
// This appears to be using strings only

// function greet(myName, yourName){
//   return "Hello " + yourName + ", my name is " + myName;
// }

// First we need to make a class Person{}
// Then we need a constructor with a name parameter so we can pass a new Person Object into it
// Assign the this. to the parameter to the object can use it
// We create a greet() method/function and I passed a person parameter to make the greeting when called
// We can test by passing in the test case of variable 'joe' to test if it works

class Person{
    constructor(name){
      this.name = name
    }
    greet(person){
      return `Hello ${person}, my name is ${this.name}`
    }
  }
  
  let joe = new Person('Joe')
  joe.name
  joe.greet('Kate')

//   function Person(name){
//     this.name = name
//   }
  
//   Person.prototype.greet = function(yourName){
//     return "Hello " + yourName + ", my name is " + this.name
//   }

// class Person {
//     constructor(name){
//         this.name = name;      
//         this.greet = (yourName) => `Hello ${yourName}, my name is ${this.name}`
//   }
// }

