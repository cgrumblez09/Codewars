// Determine if the poker hand is flush, meaning if the five cards are of the same suit.

// Your function will be passed a list/array of 5 strings, each representing a poker card in the format "5H" (5 of hearts), meaning the value of the card followed by the initial of its suit (Hearts, Spades, Diamonds or Clubs). No jokers included.

// Your function should return true if the hand is a flush, false otherwise.

// The possible card values are 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A

// PREP
// I need to take the last character of each index/string and find a way to compare each to one another to return a boolean value
// I can slice and map the end of each index/string into a new array to visually see the end in the array
// I need to either loop or find a method to compare every index to see if they match/true

function isFlush(cards) {
    let end = cards[0].slice(-1)
    console.log(end)
    let arr = cards.map(x => x.slice(-1))
    console.log(arr)
    let res = ele => ele === end;
    return arr.every(res)
    console.log(arr.every(res)) 
  }

//   function isFlush(cards) {
//     return cards.every(a=>cards[0].slice(-1)===a.slice(-1))
//   }

// const isFlush = a =>
//   a.every(val => val.slice(-1) === a[0].slice(-1));

// function isFlush(c) {
//     return !!c.join``.match(/([HSDC])(.+\1){4}/);
//   }

// function isFlush(cards) {
//     var c=cards[0][cards[0].length-1];
//     for (var i in cards)
//       if (cards[i].indexOf(c)==-1)
//         return false;
//     return true;
//   }

// function isFlush(cards) {
//     const first = cards[0].slice(-1);
//     for(let i = 1; i < 5; i++){
//       if(!cards[i].endsWith(first)) return false;
//     }
//     return true;
//   }