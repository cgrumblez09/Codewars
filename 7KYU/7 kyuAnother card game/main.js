// Twelve cards with grades from 0 to 11 randomly divided among 3 players: Frank, Sam, and Tom, 4 cards each. The game consists of 4 rounds.
// In round 1, the first player who has a card with 0 points, takes the first turn, and he starts with that card. Then the second player (queue - Frank -> Sam -> Tom -> Frank, etc.) can move with any of his cards (each card is used only once per game). The third player makes his move after the second player, and he sees the previous moves.
// The goal of the round is to move by the card with the most points.
// The winner of the previous round then makes the first move in the next round with any remaining card.
// The player who wins 2 rounds first, wins the game.

// Task
// Return true if Frank has a chance of winning the game.
// Return false if Frank has no chance.

// Input
// 3 arrays of 4 unique numbers in each (numbers in array are sorted in ascending order). Input is always valid, no need to check.

// Example
// Round 1: Frank 2 5 8 11, Sam 1 4 7 10, Tom 0 3 6 9. Tom has to start from 0. Frank is risking nothing and goes 2. Sam gets lucky and wins round by throwing 4.

// Round 2: Frank 5 8 11, Sam 1 7 10, Tom 3 6 9. Sam starts from 1. Tom goes 3, Frank wins with 5.

// Round 3: Frank 5 11, Sam 7 10, Tom 6 9. Frank starts from 11 and wins the round either way.

// Frank is the first to win 2 rounds and therefore wins the game, the answer is true.

// One more example
// Frank 0 1 2 3, Sam 6 7 8 11, Tom 4 5 9 10.
// With these cards Frank has no chance, the answer is false.

// PREP
// I do not know how to solve this one and needed to look at the answer

function solution(frank, sam, tom) {
    return frank.findIndex(n => n > sam[0] && n > tom[0]) < 3 && frank[frank.length - 1] > sam[1] && frank[frank.length - 1] > tom[1];
  }
//   function solution(frank, sam, tom) {
//     return frank[2] > sam[0] && frank[2] > tom[0] && frank[3] > sam[1] && frank[3] > tom[1]
//   }
//   function solution(frank, sam, tom) {
//     return frank[2] > Math.max(sam[0], tom[0]) && frank[3] > 
//     Math.max(sam[1], tom[1]);
//   }
//   function solution(frank, sam, tom) 
//   {
//     let frankWins = 0
//     for (let i = 0; i < 4; i++) {
//       let table = [tom.pop(), sam.pop()]
//       if (table.every(c => c < frank[3-i])) {
//         frank.pop()
//         frankWins++
//       } else {
//         frank.shift()
//       }
//     }
//     return frankWins >= 2
//   }