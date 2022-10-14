// This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!

// Task:
// Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

// Examples:
// 42, "number"   --> true
// "42", "number" --> false

// PREP
// We need to write a function that compares the parameter 'variable' to 'type'
// It appears the variable can be a number or a string, possibly other
// We simply need to return a boolean if 'variable' is equal to 'type'


// We need to use the typeof operator to return a string indicating the type of operands value

function typeValidation(variable, type) {
    return typeof variable === type
  }

// const typeValidation = (variable, type) => typeof variable === type ;

