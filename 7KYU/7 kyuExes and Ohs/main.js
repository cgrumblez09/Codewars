// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// PREP
// We need to compare and see if number or x's = number of o's
// return true if x and o match, else false
// The parameter will be a string
// Uppper and Lower case are allowed in the string
// We can set up a count for each x and o and add to it for every time one shows
// We can split('')  the string and loop through it
// Check if the index is x or o and add to the counts
// Check if count of x is equal to count of y

function XO(str) {
    let string = str.split('')
  //   console.log(string)
    let xcount = 0
    let ocount = 0
    for(let i = 0; i < string.length; i++){
      if(string[i].toLowerCase() == 'x'){
        xcount++
      }
      else if(string[i].toLowerCase() == 'o'){
        ocount++
      }
    }
  //   console.log(xcount, ocount)
    if(xcount == ocount){
      return true
    }
    else{
      return false
    }
  }

//   function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
//   }

// const XO = str => {
//     str = str.toLowerCase().split('');
//     return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
//   }

// function XO(str) {
//     return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
// }

// function XO(str) {
//     var sum = 0;
//     for(var i=0; i<str.length; i++){
//       if(str[i].toLowerCase() == 'x') sum++;
//       if(str[i].toLowerCase() == 'o') sum--;
//     }
//     return sum == 0;
//   }

