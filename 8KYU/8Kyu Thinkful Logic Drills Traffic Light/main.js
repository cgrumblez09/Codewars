// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

//PREP
//This is a conditional else/else if statement. The goals is to simulate the next stage of a traffic signal; green -> yellow -> red -> green again.

function updateLight(current) {
    if(current.toLowerCase() == 'green'){
      return 'yellow'
    }
    else if(current.toLowerCase() == 'yellow'){
      return 'red'
    }
    else if(current.toLowerCase() == 'red'){
      return 'green'
    }
  }

//   function updateLight(current) {
  
//     return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
  
//   }

const updateLight = current =>
  ({green: `yellow`, yellow: `red`, red: `green`})[current];