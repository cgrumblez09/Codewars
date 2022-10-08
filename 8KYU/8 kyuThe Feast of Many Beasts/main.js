// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// PREP
// I need to start off by seperating the first and last letter of the beast and dish string
// I can use a method or store the result of the index[0] *[.length] of each string in a variable
// I can then compare the two strings in a conditional to test for true or false

function feast(beast, dish) {
    let b = beast[0] + beast[beast.length - 1]
    let d = dish[0] + dish[dish.length - 1]
    if(b == d){
      return true
    }
    else{
      return false
    }
  }

// function feast(beast, dish) {
//   return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
// }

// function feast(beast, dish) {
//     return beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1);
//   }

// function feast(beast, dish) {
//     return beast.first() + beast.last() == dish.first() + dish.last();
//   }

