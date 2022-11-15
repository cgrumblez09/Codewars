// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// We have an array with a subset of arrays with two parameters, age and handicap
// We return 'Senior' if the age (first index) is greater than 55 and a handicap (second index) is greater than 7
// For everyone else we return 'Open' regardless of the parameter
// We can loop through the array or map it out

function openOrSenior(data){
    let arr = [];
    for(let i = 0; i < data.length; i++){
      if(data[i][0] >= 55 && data[i][1] > 7){
        arr.push('Senior')
      }
      else{
        arr.push('Open')
      }
    }
    return arr;
  }

//   function openOrSenior(data){
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
//   }

//   function openOrSenior(data){
//     function determineMembership(member){
//       return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
//     }
//     return data.map(determineMembership);
//   }

//   function openOrSenior(data){
//     var result = [];
//     data.forEach(function(member) {
//       if(member[0] >= 55 && member[1] > 7) {
//         result.push('Senior');
//       } else {
//         result.push('Open');
//       }
//     })
//     return result;
//   }