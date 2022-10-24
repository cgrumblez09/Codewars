// I don't like writing classes like this:

// function Animal(name,species,age,health,weight,color) {
//   this.name = name;
//   this.species = species;
//   this.age = age;
//   this.health = health;
//   this.weight = weight;
//   this.color = color;
// }
// Give me the power to create a similar class like this:

// const Animal = makeClass("name","species","age","health","weight","color") 

// PREP
// 


function makeClass(...properties) {
    return class {
      constructor(...props) {
        properties.forEach((prop, index) => {
          this[prop] = props[index]
        })
      }
    }
  }

//   const makeClass = (...keys) =>
//   function (...values) {
//     keys.forEach((val, idx) => this[val] = values[idx]);
//   };

//   function makeClass(...properties) {
//     return function() {
//       for (let i = 0; i < arguments.length; i++)
//         this[properties[i]] = arguments[i];
//     }
//   }

//   makeClass=(...a)=>function(...b){b.forEach((c,d)=>this[a[d]]=c)}