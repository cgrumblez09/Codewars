// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// function removeExclamationMarks(s) {
//   return ''
// }

// Take a string and remove any uses of '!' in it
// Use the .replace method

function removeExclamationMarks(s) {
  return s.split('!').join('');
}

// function removeExclamationMarks(s) {
//   var arr =s.split("");
//   arr = arr.filter(function(e){
//         return e !== "!";
//     })
//     return arr.join("");
// }

// function removeExclamationMarks(s) {
//   return s.replace(/[!]/g , '');
// }

// function removeExclamationMarks(s) {
//   return s.replace(/!/gi, '');
// }

// function removeExclamationMarks(s) {
//   let arr = s.split('')
//   while ( arr.includes('!') ) {
//     let idx = arr.findIndex(i => i==='!')
//    arr.splice(idx,1)
//   }
//   return arr.join('')
// }