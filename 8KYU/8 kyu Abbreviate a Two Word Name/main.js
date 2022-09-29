// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// PREP
// I need to take the first letter of each name by splitting the string and return the first letter
// I can loop the array or hard code this
// Slice, splice or charAt are options for methods to use and
// I need to join the two letters and make sure they are uppercase

function abbrevName(name){
    let x = name.split(' ')
    let y = []
  console.log(name.split(' '))
    for(let i = 0; i < x.length; i++){
      y.push(x[i].charAt(0).toUpperCase())
    }
    console.log(y.join('.'))
    return y.join('.')
  }

//   function abbrevName(name){}
//     var nameArray = name.split(" ");
//     return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
//   }

// function abbrevName(name){
//     return name.split(' ').map(i => i[0].toUpperCase()).join('.')
// }

// function abbrevName(name){
//     return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
//   }

// function abbrevName(name){
//     return name[0].toUpperCase() + "." + name[name.indexOf(" ")+1].toUpperCase();
// }